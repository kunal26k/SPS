// Public website bundle for static hosting (GitHub Pages): the flattened preview.
//
//   pnpm export:preview && node scripts/export-site.mjs   → site-dist/

import { cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "preview");
const dest = join(root, "site-dist");
if (!existsSync(src)) throw new Error("preview/ not found — run pnpm export:preview first");

const website = ["index.html", "about.html", "academics.html", "admissions.html", "404.html"];

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
for (const f of readdirSync(dest)) {
  if (f.endsWith(".html") && !website.includes(f)) rmSync(join(dest, f));
}

// Fail loudly if a website page still links to a page that is not published.
for (const page of website.filter((p) => p !== "404.html")) {
  const html = readFileSync(join(dest, page), "utf8").replace(/<script>self\.__next_f[\s\S]*?<\/script>/g, "");
  for (const [, href] of html.matchAll(/href="([a-z0-9-]+\.html)(?:#[^"]*)?"/g)) {
    if (!website.includes(href)) throw new Error(`${page} links to unpublished page ${href}`);
  }
}

// GitHub Pages runs Jekyll by default, which drops folders starting with "_" (like _next).
writeFileSync(join(dest, ".nojekyll"), "");
console.log(`site-dist/: ${readdirSync(dest).filter((f) => f.endsWith(".html")).join(", ")}`);
