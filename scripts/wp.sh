#!/usr/bin/env bash
# wp.sh — the publishing toolkit that replaces the manual developer step.
#
# Everything here runs over SSH + WP-CLI. The WordPress REST API is NOT used:
# SiteGround's Anti-Bot AI serves an sgcaptcha challenge to datacenter IPs, so
# REST publishing fails from CI. SSH is not subject to that challenge.
#
# Commands
#   ./scripts/wp.sh page   <file.md>              create/update a WordPress page
#   ./scripts/wp.sh post   <file.md>              create/update a WordPress blog post
#   ./scripts/wp.sh media  <file.png|jpg|html>    upload to the media library, print the URL
#   ./scripts/wp.sh render <file.html> [out.png]  render HTML to PNG with headless Chrome
#   ./scripts/wp.sh visual <file.html>            render + upload in one step, print the URL
#   ./scripts/wp.sh redirect <from> <to>          add a 301 via the Redirection plugin
#   ./scripts/wp.sh status <slug>                 show a page/post's id, status and URL
#
# Markdown files carry front-matter:
#   ---
#   title: My Page
#   slug: my-page
#   status: draft          # draft | publish   (draft is the default and the safe one)
#   type: page             # page | post       (overridden by the subcommand)
#   category: Outbound     # posts only, optional
#   ---
#
# Environment (CI sets these from repository secrets; locally they default):
#   SSH_HOST SSH_USER SSH_PORT SSH_KEY WP_PATH
set -euo pipefail

SSH_HOST="${SSH_HOST:-c1131935.sgvps.net}"
SSH_USER="${SSH_USER:-u2-brdthq677x9b}"
SSH_PORT="${SSH_PORT:-18765}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/scalelist_siteground}"
WP_PATH="${WP_PATH:-~/www/scalelist.com/public_html}"
DRY_RUN="${DRY_RUN:-0}"

SSH="ssh -i $SSH_KEY -p $SSH_PORT -o BatchMode=yes -o StrictHostKeyChecking=accept-new $SSH_USER@$SSH_HOST"
SCP="scp -i $SSH_KEY -P $SSH_PORT -o BatchMode=yes -o StrictHostKeyChecking=accept-new"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

die() { echo "ERROR: $*" >&2; exit 1; }

fm() { # fm <file> <key>  -> front-matter value
  sed -n "s/^$2:[[:space:]]*//p" "$1" | head -1 | sed 's/^["'\'']//;s/["'\'']$//'
}

# ---------------------------------------------------------------- publish ----
publish_content() {
  local md="$1" type="$2"
  [ -f "$md" ] || die "no such file: $md"

  local title slug status category html b64 id
  title=$(fm "$md" title)
  slug=$(fm "$md" slug); [ -n "$slug" ] || slug="$(basename "$md" .md)"
  status=$(fm "$md" status); [ -n "$status" ] || status="draft"
  category=$(fm "$md" category)

  [ -n "$title" ] || die "$md: front-matter 'title' is required"
  case "$status" in draft|publish) ;; *) die "$md: status must be draft or publish (got '$status')";; esac

  html=$(node "$ROOT/scripts/md-to-html.mjs" "$md")
  b64=$(printf '%s' "$html" | base64)

  # get_page_by_path() sees drafts; `wp post list --name=` silently does not.
  if [ "$type" = "page" ]; then
    id=$($SSH "cd $WP_PATH && wp eval \"\\\$p = get_page_by_path('$slug', OBJECT, 'page'); echo \\\$p ? \\\$p->ID : '';\" 2>/dev/null" || true)
  else
    id=$($SSH "cd $WP_PATH && wp eval \"\\\$p = get_page_by_path('$slug', OBJECT, 'post'); echo \\\$p ? \\\$p->ID : '';\" 2>/dev/null" || true)
  fi
  id=$(printf '%s' "$id" | tr -d '[:space:]')

  if [ "$DRY_RUN" = "1" ]; then
    echo "• ${slug} — $([ -n "$id" ] && echo "UPDATE id=$id" || echo CREATE)  type=$type status=$status html=${#html}b"
    return 0
  fi

  local catflag=""
  [ -n "$category" ] && [ "$type" = "post" ] && catflag="--post_category=\$(wp term list category --field=term_id --name='$category' --format=csv | head -1)"

  if [ -n "$id" ]; then
    printf '%s' "$b64" | $SSH "cd $WP_PATH && base64 -d | wp post update $id --post_title='$title' --post_status=$status --post_name='$slug' - >/dev/null"
    echo "✓ ${slug} updated (id=$id, type=$type, status=$status)"
  else
    id=$(printf '%s' "$b64" | $SSH "cd $WP_PATH && base64 -d | wp post create - --post_type=$type --post_title='$title' --post_status=$status --post_name='$slug' --porcelain")
    id=$(printf '%s' "$id" | tr -d '[:space:]')
    echo "✓ ${slug} created (id=$id, type=$type, status=$status)"
  fi
}

# ----------------------------------------------------------------- render ----
render_html() {
  local src="$1" out="${2:-${1%.html}.png}"
  [ -f "$src" ] || die "no such file: $src"
  [ -x "$CHROME" ] || die "headless Chrome not found at: $CHROME (set CHROME=...)"
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --window-size="${RENDER_WIDTH:-1200},${RENDER_HEIGHT:-1600}" \
    --screenshot="$out" "file://$(cd "$(dirname "$src")" && pwd)/$(basename "$src")" >/dev/null 2>&1
  [ -f "$out" ] || die "render produced no file"
  echo "$out"
}

# ------------------------------------------------------------------ media ----
upload_media() {
  local f="$1"
  [ -f "$f" ] || die "no such file: $f"
  local remote="/tmp/$(basename "$f")"
  $SCP "$f" "$SSH_USER@$SSH_HOST:$remote" >/dev/null
  local url
  url=$($SSH "cd $WP_PATH && wp media import '$remote' --porcelain 2>/dev/null | tail -1 | xargs -I{} wp post get {} --field=guid; rm -f '$remote'")
  url=$(printf '%s' "$url" | tr -d '[:space:]')
  [ -n "$url" ] || die "media import returned no URL"
  echo "$url"
}

# --------------------------------------------------------------- redirect ----
add_redirect() {
  local from="$1" to="$2"
  $SSH "cd $WP_PATH && wp eval \"
    if ( ! class_exists('Red_Item') ) { echo 'REDIRECTION_PLUGIN_UNAVAILABLE'; exit; }
    \\\$existing = Red_Item::get_for_url('$from');
    if ( ! empty(\\\$existing) ) { echo 'EXISTS'; exit; }
    Red_Item::create( array('url' => '$from', 'action_data' => array('url' => '$to'), 'match_type' => 'url', 'action_type' => 'url', 'action_code' => 301, 'group_id' => 1, 'status' => 'enabled') );
    echo 'CREATED';
  \""
}

# ----------------------------------------------------------------- status ----
show_status() {
  local slug="$1"
  $SSH "cd $WP_PATH && wp eval \"
    foreach ( array('page','post') as \\\$t ) {
      \\\$p = get_page_by_path('$slug', OBJECT, \\\$t);
      if ( \\\$p ) { printf( '%s id=%d status=%s url=%s' . PHP_EOL, \\\$t, \\\$p->ID, \\\$p->post_status, get_permalink(\\\$p) ); }
    }
  \""
}

# -------------------------------------------------------------------- cli ----
cmd="${1:-}"; shift || true
case "$cmd" in
  page)     publish_content "$1" page ;;
  post)     publish_content "$1" post ;;
  media)    upload_media "$1" ;;
  render)   render_html "$@" ;;
  visual)   png=$(render_html "$1"); upload_media "$png" ;;
  redirect) add_redirect "$1" "$2" ;;
  status)   show_status "$1" ;;
  *) sed -n '2,30p' "$0"; exit 1 ;;
esac
