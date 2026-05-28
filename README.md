# Personal portfolio

Single-page portfolio for Evan Ritzcovan — Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` (and in Vercel for production). For mobile testing over Wi‑Fi, optionally set `NEXT_DEV_ALLOWED_ORIGIN` to your computer’s LAN IP (see `.env.example`).

## Scripts

| Command                | Description            |
| ---------------------- | ---------------------- |
| `npm run dev`          | Start dev server       |
| `npm run build`        | Production build       |
| `npm run start`        | Serve production build |
| `npm run lint`         | ESLint                 |
| `npm run format`       | Format with Prettier   |
| `npm run format:check` | Check formatting       |

## Project structure

- `src/app/` — routes, layout, metadata, sitemap
- `src/components/` — layout, sections, shared UI
- `src/data/` — site content (projects, skills, copy)
- `public/` — images, résumé PDF
