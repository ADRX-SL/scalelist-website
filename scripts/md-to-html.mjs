#!/usr/bin/env node
// Shared Markdown -> HTML converter. Prints the HTML for a content file.
//   node scripts/md-to-html.mjs content/pages/foo.md
import { readFileSync } from "node:fs";

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


const file = process.argv[2];
if (!file) { console.error("usage: md-to-html.mjs <file.md>"); process.exit(1); }
const raw = readFileSync(file, "utf8");
const m = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/);
process.stdout.write(mdToHtml((m ? m[1] : raw).trim()));
