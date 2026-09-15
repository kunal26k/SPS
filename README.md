# SPS
Sharda public school repo

This repo holds two separate website projects side by side:

| Folder | What it is | Run |
|---|---|---|
| `/` (`src/`, `public/`) | **SPS web only** — the Sharda Public School website (Home, About, Academics, Admissions) built with Next.js 15 from the Claude Design project "SPS web". | `pnpm install && pnpm dev` → http://localhost:3300 |
| `sps-website/` | Earlier Next.js + Tailwind site (April 2026). | `cd sps-website && npm install && npm run dev` |
| `design/` | Export of the Claude Design project "SPS web" (https://claude.ai/design/p/84ee29e4-b784-4396-8b59-159587ed45cb) — the source of truth for layout and the desktop, tablet and mobile flow. | Open the HTML files in a browser |

Live: https://kunal26k.github.io/SPS/ (branch `gh-pages`).

## SPS web only

| Route | Source |
|---|---|
| `/` | `src/app/(site)/page.tsx` + `src/site/home/` |
| `/about` | `src/app/(site)/about/` (React) |
| `/academics` | `src/app/(site)/academics/page.tsx` + `src/site/academics/` |
| `/admissions` | `src/app/(site)/admissions/page.tsx` + `src/site/admissions/` |

- One shared nav (`src/components/site-nav.tsx`) and footer (`site-footer.tsx`), styled by `src/site/shell.css`. Home uses the nav's over-the-hero variant.
- School facts come from `school-data.json` and live in `src/site/school.ts`: principal Mrs. Vinita Shekhar, +91 73005 02640 and 05962 236611 / 236073 / 230283, contact@ and admission@shardapublicschool.com, Junior Branch (Khatyari) and Senior Branch (Dugalkhola), CBSE Aff. No. 3530299, Est. 2001.
- The Admissions page is the source for the admission process; Home and About show a short summary that links to it.
- Home, Academics and Admissions bodies (`src/site/*/content.html` + `page.css`) started from `design/` and are maintained here with the fixes above. When the design changes, port the change into these files.
- The website has no portal screens and does not link to any.

### Desktop, tablet and mobile flow (from the design)

- **Desktop (>1024px):** full pages.
- **Tablet and mobile (≤1024px):** each section collapses into a tap-to-expand bar with its title and a two-line description; the first section starts open. Styles: `src/site/accordion.css`. Behaviour: `src/components/site-accordion.tsx` (Home, Academics, Admissions) and `accordion-section.tsx` (About). Links to a section (`/admissions#fees`, the in-page chips) open it.
- Each page's CSS ends with the design's ≤1024/980px and ≤480px rules, plus a few overflow fixes the design lacks (marked in the CSS).

Checks: `pnpm typecheck` and `pnpm build`.

Hosted preview: `STATIC_EXPORT=1 pnpm build && node scripts/flatten-export.mjs` writes a flat, relative-path static site to `preview/`.
