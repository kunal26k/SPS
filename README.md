# SPS
Sharda public school repo

This repo holds two separate website projects side by side:

| Folder | What it is | Run |
|---|---|---|
| `/` (`src/`, `public/`) | **SPS web only** — Next.js 15 rebuild of the Claude Design screens (plain CSS, Cormorant Garamond + DM Sans). Built so far: `/about`. | `pnpm install && pnpm dev` → http://localhost:3300/about |
| `sps-website/` | Earlier Next.js + Tailwind site (April 2026). | `cd sps-website && npm install && npm run dev` |
| `design/` | Claude Design export — the HTML source of truth for SPS web only (`design/About.html`, `design/uploads/`). | Open the HTML files in a browser |

## SPS web only

- `src/app/about/page.tsx` + `about.css` — About page, from `design/About.html`.
- `src/components/site-nav.tsx`, `site-footer.tsx` — shared shell (nav with mobile menu, footer).
- `src/components/feedback-form.tsx` — feedback form; confirms locally, no backend yet.
- `public/SPS-crest.png` — crest, copied from `design/uploads/SPS-crest.png`.

Checks: `pnpm typecheck` and `pnpm build`.
