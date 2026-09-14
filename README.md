# SPS
Sharda public school repo

This repo holds two separate website projects side by side:

| Folder | What it is | Run |
|---|---|---|
| `/` (`src/`, `public/`) | **SPS web only** — Next.js 15 rebuild of all 16 Claude Design screens: website (Home, About, Academics, Admissions, Login), Student / Teacher / Parent / Admin portals, Feature Documentation. | `pnpm install && pnpm dev` → http://localhost:3300 |
| `sps-website/` | Earlier Next.js + Tailwind site (April 2026). | `cd sps-website && npm install && npm run dev` |
| `design/` | Claude Design export — the HTML source of truth for SPS web only (`design/About.html`, `design/uploads/`). | Open the HTML files in a browser |

## SPS web only

| Route | Design file |
|---|---|
| `/` | `design/Home.html` |
| `/about` | `design/About.html` (hand-built React: `src/app/about/`) |
| `/academics`, `/admissions`, `/login` | `design/Academics.html`, `Admissions.html`, `Login.html` |
| `/student-portal` + `/calendar`, `/messages`, `/settings` | `design/Student Portal*.html` |
| `/teacher-portal` + `/calendar`, `/messages`, `/settings` | `design/Teacher Portal*.html` |
| `/parent-portal`, `/admin-portal` | `design/Parent Portal.html`, `Admin Portal.html` |
| `/feature-documentation` | `design/Feature Documentation.html` |

- **About** is componentised React (`src/app/about/`, `src/components/`).
- **Every other screen** is generated from its design file by `pnpm import:design` into `src/design/screens/` and rendered by `src/app/[[...screen]]/page.tsx`. Markup, CSS and the design's own scripts are kept verbatim, links point at app routes, and the design tool's Desktop/Tablet/Mobile switcher is removed. Re-run `pnpm import:design` after each new export into `design/`.
- Not rebuilt (design-tool packaging, no screens of their own): `SPS Cowork.html`, `Co-work Desktop App.html`, `SPS Website Offline.html`, `SPS Website Standalone -source-.html`, `SPS Website WIP.html`, `logo-test.html`.

Checks: `pnpm typecheck` and `pnpm build`.

Hosted preview: `STATIC_EXPORT=1 pnpm build && node scripts/flatten-export.mjs` writes a flat, relative-path static site to `preview/`.
