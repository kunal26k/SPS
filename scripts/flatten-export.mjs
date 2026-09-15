// Turns the Next.js static export (out/) into a flat, relative-path site in
// preview/, so it can be hosted under any sub-path (e.g. a claude.ai Artifact),
// where root-relative URLs like /_next/... are not served.
//
//   STATIC_EXPORT=1 pnpm build && node scripts/flatten-export.mjs
//
// - every page moves to the top level: a/b.html → a-b.html
// - links to app routes become those .html files
// - /_next/, /uploads/ and /SPS-crest.png become relative
// - RSC .txt payloads are dropped (no client-side navigation is used)

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "out");
const dest = join(root, "preview");
if (!existsSync(src)) throw new Error("out/ not found — run STATIC_EXPORT=1 pnpm build first");

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = walk(src)
  .filter((p) => p.endsWith(".html"))
  .map((p) => relative(src, p).replace(/\.html$/, "")); // "index", "about", "academics", "404"

const flatName = (page) => `${page.replaceAll("/", "-")}.html`;
const routes = pages
  .filter((p) => p !== "index" && p !== "404" && p !== "_not-found")
  .sort((a, b) => b.length - a.length);

const staticRefs = /(["'(=]|\\")\/(_next\/|uploads\/|SPS-crest\.png)/g;

function rewriteMarkup(chunk) {
  let out = chunk.replace(staticRefs, "$1$2");
  for (const r of routes) {
    out = out.replace(new RegExp(`(["'(=])/${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[#?"')])`, "g"), `$1${flatName(r)}`);
  }
  return out.replace(/(["'(=])\/(?=[#?"')])/g, "$1index.html");
}

function rewriteHtml(html) {
  // React's flight payload: its text rows carry length prefixes, so editing inside
  // them corrupts hydration. Only the asset hints (JSON rows, never inside the
  // pages' text rows) get their /_next/ made relative.
  return html
    .split(/(<script>self\.__next_f\.push[\s\S]*?<\/script>)/)
    .map((part, i) => (i % 2 ? part.replaceAll('\\"/_next/', '\\"_next/') : rewriteMarkup(part)))
    .join("");
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

for (const page of pages) {
  const html = readFileSync(join(src, `${page}.html`), "utf8");
  writeFileSync(join(dest, flatName(page)), rewriteHtml(html));
}

cpSync(join(src, "_next"), join(dest, "_next"), { recursive: true });
for (const f of walk(join(dest, "_next"))) {
  if (f.endsWith(".js")) {
    // U+FFFD literals (in the polyfills) are rewritten as escapes; some hosts reject them as bad UTF-8.
    writeFileSync(f, readFileSync(f, "utf8").replaceAll('"/_next/"', '"_next/"').replaceAll("\uFFFD", "\\uFFFD"));
  } else if (f.endsWith(".css")) {
    // CSS lives in _next/static/css/; its fonts in _next/static/media/.
    writeFileSync(f, readFileSync(f, "utf8").replaceAll("/_next/static/media/", "../media/"));
  }
}

// Only the uploads the pages actually reference.
const allHtml = readdirSync(dest).filter((f) => f.endsWith(".html")).map((f) => readFileSync(join(dest, f), "utf8")).join("");
mkdirSync(join(dest, "uploads"));
for (const f of readdirSync(join(src, "uploads"))) {
  if (allHtml.includes(`uploads/${f}`)) cpSync(join(src, "uploads", f), join(dest, "uploads", f));
}


console.log(`preview/: ${pages.length} pages, ${walk(dest).length} files`);
