#!/usr/bin/env bash
# Publish content/pages/*.md to WordPress over SSH using WP-CLI.
#
# Why not the REST API? SiteGround's Anti-Bot AI challenges requests from
# datacenter IPs (GitHub Actions runners) with an sgcaptcha page, so REST
# publishing fails from CI. SSH is not subject to that challenge.
#
# Environment:
#   SSH_HOST   c1131935.sgvps.net
#   SSH_USER   u2-brdthq677x9b
#   SSH_PORT   18765
#   SSH_KEY    path to the private key
#   WP_PATH    ~/www/scalelist.com/public_html
#   DRY_RUN    set to 1 to print actions without writing
set -euo pipefail

SSH_HOST="${SSH_HOST:?}"; SSH_USER="${SSH_USER:?}"; SSH_PORT="${SSH_PORT:-18765}"
SSH_KEY="${SSH_KEY:?}"; WP_PATH="${WP_PATH:?}"; DRY_RUN="${DRY_RUN:-0}"
SSH="ssh -i $SSH_KEY -p $SSH_PORT -o BatchMode=yes -o StrictHostKeyChecking=accept-new $SSH_USER@$SSH_HOST"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fail=0

for md in "$ROOT"/content/pages/*.md; do
  [ -e "$md" ] || { echo "No pages found."; exit 0; }

  title=$(sed -n 's/^title:[[:space:]]*//p'  "$md" | head -1 | sed 's/^["'\'']//;s/["'\'']$//')
  slug=$(sed  -n 's/^slug:[[:space:]]*//p'   "$md" | head -1)
  status=$(sed -n 's/^status:[[:space:]]*//p' "$md" | head -1)
  [ -n "$slug" ]   || slug="$(basename "$md" .md)"
  [ -n "$status" ] || status="draft"

  if [ -z "$title" ]; then echo "✗ $(basename "$md"): missing 'title'"; fail=1; continue; fi
  if [ "$status" != "draft" ] && [ "$status" != "publish" ]; then
    echo "✗ $(basename "$md"): status must be draft|publish (got '$status')"; fail=1; continue
  fi

  html=$(node "$ROOT/scripts/md-to-html.mjs" "$md")
  b64=$(printf '%s' "$html" | base64)

  # `wp post list --name=` silently ignores drafts; get_page_by_path() does not.
  id=$($SSH "cd $WP_PATH && wp eval \"\\\$p = get_page_by_path('$slug', OBJECT, 'page'); echo \\\$p ? \\\$p->ID : '';\" 2>/dev/null" || true)
  id=$(printf '%s' "$id" | tr -d '[:space:]')

  if [ "$DRY_RUN" = "1" ]; then
    echo "• ${slug} — $([ -n "$id" ] && echo "UPDATE id=$id" || echo CREATE)  status=$status  html=${#html}b"
    continue
  fi

  if [ -n "$id" ]; then
    printf '%s' "$b64" | $SSH "cd $WP_PATH && base64 -d | wp post update $id --post_title='$title' --post_status=$status --post_name='$slug' - >/dev/null && echo updated"
    echo "✓ ${slug} updated (id=$id, status=$status)"
  else
    newid=$(printf '%s' "$b64" | $SSH "cd $WP_PATH && base64 -d | wp post create - --post_type=page --post_title='$title' --post_status=$status --post_name='$slug' --porcelain")
    echo "✓ ${slug} created (id=$(printf '%s' "$newid" | tr -d '[:space:]'), status=$status)"
  fi
done

[ "$fail" = "0" ] || { echo "Some pages failed."; exit 1; }
echo "Done."
