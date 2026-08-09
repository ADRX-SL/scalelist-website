#!/usr/bin/env node
/**
 * Publish content/pages/*.md to WordPress via the REST API.
 *
 *   node scripts/publish-to-wordpress.mjs --dry-run       validate + show payloads, no network
 *   node scripts/publish-to-wordpress.mjs                 create/update every page
 *   node scripts/publish-to-wordpress.mjs --only <slug>   just one page
 *
 * Credentials come from the environment, never from the repo:
 *   WP_URL       https://scalelist.com
 *   WP_USER      WordPress username
 *   WP_APP_PASS  Application Password (wp-admin > Users > Profile > Application Passwords)
 *
 * Page IDs are recorded in content/.page-ids.json so re-runs UPDATE rather than duplicate.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const PAGES_DIR = join(ROOT, "content/pages");
const IDS_FILE = join(ROOT, "content/.page-ids.json");

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const ONLY = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;

// ---------- front-matter ----------------------------------------------------
function parseFrontMatter(raw, file) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing front-matter block (--- ... ---)`);
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const i = line.indexOf(":");
    if (i === -1) throw new Error(`${file}: bad front-matter line: ${line}`);
    let v = line.slice(i + 1).trim();
    v = v.replace(/^["']|["']$/g, "");
    meta[line.slice(0, i).trim()] = v;
  }
  return { meta, body: m[2] };
}

// ---------- minimal, dependency-free Markdown -------------------------------
function mdToHtml(md) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const inline = (s) =>
    s
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  const out = [];
  let list = null;
  let para = [];
  const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  // soft-wrapped lines belong to the same paragraph — join them, don't split
  const flushPara = () => {
    if (para.length) { out.push(`<p>${inline(esc(para.join(" ")))}</p>`); para = []; }
  };

  for (const rawLine of md.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    const li = line.match(/^\s*[-*]\s+(.*)$/);
    const oli = line.match(/^\s*\d+\.\s+(.*)$/);

    if (h) { flushPara(); closeList(); out.push(`<h${h[1].length}>${inline(esc(h[2]))}</h${h[1].length}>`); }
    else if (li) { flushPara(); if (list !== "ul") { closeList(); out.push("<ul>"); list = "ul"; } out.push(`<li>${inline(esc(li[1]))}</li>`); }
    else if (oli) { flushPara(); if (list !== "ol") { closeList(); out.push("<ol>"); list = "ol"; } out.push(`<li>${inline(esc(oli[1]))}</li>`); }
    else if (!line.trim()) { flushPara(); closeList(); }
    else { closeList(); para.push(line.trim()); }
  }
  flushPara();
  if (list) out.push(`</${list}>`);
  return out.join("\n");
}

// ---------- main ------------------------------------------------------------
const ids = existsSync(IDS_FILE) ? JSON.parse(readFileSync(IDS_FILE, "utf8")) : {};
const files = readdirSync(PAGES_DIR).filter((f) => f.endsWith(".md"));
if (!files.length) { console.log("No pages in content/pages/"); process.exit(0); }

const { WP_URL, WP_USER, WP_APP_PASS } = process.env;
if (!DRY && (!WP_URL || !WP_USER || !WP_APP_PASS)) {
  console.error("Missing WP_URL / WP_USER / WP_APP_PASS. Use --dry-run to validate without them.");
  process.exit(1);
}
const auth = DRY ? null : "Basic " + Buffer.from(`${WP_USER}:${WP_APP_PASS}`).toString("base64");

let failures = 0;
for (const file of files) {
  const raw = readFileSync(join(PAGES_DIR, file), "utf8");
  let meta, body;
  try { ({ meta, body } = parseFrontMatter(raw, file)); }
  catch (e) { console.error("✗", e.message); failures++; continue; }

  const slug = meta.slug || basename(file, ".md");
  if (ONLY && slug !== ONLY) continue;

  if (!meta.title) { console.error(`✗ ${file}: 'title' is required`); failures++; continue; }
  const status = (meta.status || "draft").toLowerCase();
  if (!["draft", "publish"].includes(status)) {
    console.error(`✗ ${file}: status must be 'draft' or 'publish' (got '${status}')`); failures++; continue;
  }

  const payload = { title: meta.title, slug, status, content: mdToHtml(body.trim()) };
  let existingId = ids[slug];

  if (DRY) {
    console.log(`• ${slug.padEnd(30)} ${existingId ? "UPDATE id=" + existingId : "CREATE (or adopt by slug)"}  status=${status}  html=${payload.content.length}b  title="${meta.title}"`);
    continue;
  }

  // If we have no recorded ID, ask WordPress whether a page with this slug already
  // exists and adopt it. Without this, a failed write-back of .page-ids.json would
  // make the next run create a duplicate page instead of updating.
  if (!existingId) {
    const lookup = await fetch(
      `${WP_URL.replace(/\/$/, "")}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&status=any&per_page=1`,
      { headers: { Authorization: auth } },
    );
    if (lookup.ok) {
      const found = await lookup.json();
      if (Array.isArray(found) && found.length) {
        existingId = found[0].id;
        console.log(`  ↳ adopted existing page id=${existingId} for slug '${slug}'`);
      }
    }
  }

  const url = existingId
    ? `${WP_URL.replace(/\/$/, "")}/wp-json/wp/v2/pages/${existingId}`
    : `${WP_URL.replace(/\/$/, "")}/wp-json/wp/v2/pages`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: auth },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error(`✗ ${slug}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
    failures++;
    continue;
  }
  const json = await res.json();
  ids[slug] = json.id;
  console.log(`✓ ${slug.padEnd(30)} ${existingId ? "updated" : "created"} id=${json.id} status=${json.status}`);
}

if (!DRY) writeFileSync(IDS_FILE, JSON.stringify(ids, null, 2) + "\n");
if (failures) { console.error(`\n${failures} page(s) failed.`); process.exit(1); }
console.log(DRY ? "\nDry run OK — no network calls made." : "\nDone.");
