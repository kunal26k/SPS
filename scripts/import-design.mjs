// Converts the Claude Design export in design/ into Next.js screen modules.
//
//   node scripts/import-design.mjs
//
// Each screen's <style>, font <link>s and <body> markup (scripts included) are
// kept verbatim and rendered server-side, so the page behaves exactly like the
// design file. Links between screens are rewritten to app routes, uploads/ to
// /uploads/, and the design tool's Desktop/Tablet/Mobile preview switcher is
// removed. Responsive layers from src/design/responsive/ are added after each
// screen's CSS. Re-run after every design export.

import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const designDir = join(root, "design");
const outDir = join(root, "src", "design", "screens");

// file in design/ → route. The public website (Home, About, Academics, Admissions) is
// maintained in src/site and src/app/(site) instead: it has been fixed and stitched
// together, so a re-import must not overwrite it.
export const screens = [
  { file: "Login.html", route: "/login", group: "Website", label: "Portal Login" },
  { file: "Student Portal.html", route: "/student-portal", group: "Student Portal", label: "Dashboard" },
  { file: "Student Portal - Calendar.html", route: "/student-portal/calendar", group: "Student Portal", label: "Calendar" },
  { file: "Student Portal - Messages.html", route: "/student-portal/messages", group: "Student Portal", label: "Messages" },
  { file: "Student Portal - Settings.html", route: "/student-portal/settings", group: "Student Portal", label: "Settings" },
  { file: "Teacher Portal.html", route: "/teacher-portal", group: "Teacher Portal", label: "Dashboard" },
  { file: "Teacher Portal - Calendar.html", route: "/teacher-portal/calendar", group: "Teacher Portal", label: "Calendar" },
  { file: "Teacher Portal - Messages.html", route: "/teacher-portal/messages", group: "Teacher Portal", label: "Messages" },
  { file: "Teacher Portal - Settings.html", route: "/teacher-portal/settings", group: "Teacher Portal", label: "Settings" },
  { file: "Parent Portal.html", route: "/parent-portal", group: "Parent Portal", label: "Dashboard" },
  { file: "Admin Portal.html", route: "/admin-portal", group: "Admin Portal", label: "Dashboard" },
  { file: "Feature Documentation.html", route: "/feature-documentation", group: "Docs", label: "Feature Documentation" },
];

// Responsive layers (src/design/responsive/*.css) added after a screen's own CSS.
const portalScreens = (route) => /^\/(student|teacher|parent|admin)-portal/.test(route);
function responsiveFor(route) {
  const files = [];
  if (portalScreens(route)) files.push("portal.css");
  if (route.endsWith("/calendar")) files.push("calendar.css");
  if (route.endsWith("/messages")) files.push("messages.css");
  if (route === "/admin-portal") files.push("admin-portal.css");
  if (route === "/feature-documentation") files.push("feature-documentation.css");
  return files
    .map((f) => `<style data-responsive="${f}">\n${readFileSync(join(root, "src", "design", "responsive", f), "utf8")}</style>`)
    .join("\n");
}

const linkTargets = new Map([
  ...screens.map((s) => [s.file, s.route]),
  ["Home.html", "/"],
  ["Academics.html", "/academics"],
  ["Admissions.html", "/admissions"],
  ["About.html", "/about"],
  ["index.html", "/"],
  // The old website shell; portals use it as "back to website".
  ["SPS Website WIP.html", "/"],
]);

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function rewriteLinks(text) {
  let out = text;
  for (const [file, route] of linkTargets) {
    const variants = [file, file.replaceAll(" ", "%20")];
    for (const v of variants) {
      // Only when the filename is a whole URL value: preceded by a quote/paren/=, followed by #, ?, quote or paren.
      const re = new RegExp(`(["'(=])${escapeRe(v)}(?=[#?"')])`, "g");
      out = out.replace(re, (_, lead) => `${lead}${route}`);
    }
  }
  // "/#home" and "/?x" are fine; avoid "//" when route is "/" and nothing follows.
  return out.replace(/(["'(=])uploads\//g, "$1/uploads/");
}

function stripPreviewSwitcher(html) {
  return html
    .replace(/<div class="vw-switch"[^>]*>[\s\S]*?<\/div>/g, "")
    .replace(/<script>(?:(?!<\/script>)[\s\S])*?vwSwitch[\s\S]*?<\/script>/g, "")
    .replace(/^\s*\.vw-(?:switch|overlay)[^\n]*\n/gm, "")
    .replace(/<style>\s*<\/style>/g, "");
}

function convert(file, route) {
  const src = readFileSync(join(designDir, file), "utf8");
  const title = (src.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.trim() ?? "Sharda Public School";
  const head = (src.match(/<head>([\s\S]*?)<\/head>/) || [])[1] ?? "";
  const body = (src.match(/<body[^>]*>([\s\S]*)<\/body>/) || [])[1];
  if (body === undefined) throw new Error(`${file}: no <body>`);

  const fontLinks = [...head.matchAll(/<link[^>]*rel="stylesheet"[^>]*>|<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2[^>]*>/g)].map((m) => m[0]);
  const styles = [...head.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)].map((m) => m[0]);

  const html = rewriteLinks(stripPreviewSwitcher([...new Set(fontLinks), ...styles, responsiveFor(route), body].join("\n")));
  return { title, html };
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const index = [];
for (const s of screens) {
  const { title, html } = convert(s.file, s.route);
  const id = s.route.slice(1).replaceAll("/", "--");
  writeFileSync(
    join(outDir, `${id}.ts`),
    `// Generated by scripts/import-design.mjs from design/${s.file}. Do not edit by hand.\n` +
      `export const title = ${JSON.stringify(title)};\n` +
      `export const html = ${JSON.stringify(html)};\n`,
  );
  index.push({ ...s, id, title });
  console.log(`${s.file.padEnd(34)} → ${s.route.padEnd(26)} ${(html.length / 1024).toFixed(0)} KB`);
}

writeFileSync(
  join(outDir, "index.ts"),
  `// Generated by scripts/import-design.mjs. Do not edit by hand.\n` +
    `export const screens = ${JSON.stringify(index, null, 2)} as const;\n\n` +
    `export const loaders: Record<string, () => Promise<{ title: string; html: string }>> = {\n` +
    index.map((s) => `  ${JSON.stringify(s.id)}: () => import(${JSON.stringify(`./${s.id}`)}),`).join("\n") +
    `\n};\n`,
);

mkdirSync(join(root, "public", "uploads"), { recursive: true });
for (const f of readdirSync(join(designDir, "uploads"))) {
  copyFileSync(join(designDir, "uploads", f), join(root, "public", "uploads", f));
}
console.log(`\n${index.length} screens written to src/design/screens, uploads copied to public/uploads`);
