# London Thames International

UK & Europe Market Entry Advisory Website

## Overview

A bilingual (English / Chinese) informational corporate website for
London Thames International, a UK & Europe market entry advisory firm.
The site helps Chinese brands, manufacturers and businesses understand
how to validate demand, plan an entry strategy, and establish a genuine
commercial presence in the UK and Europe.

This is a marketing/informational site — there is no client portal,
payment flow, or backend form submission. Contact happens by email.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (v4, CSS-first configuration)
- [next-intl](https://next-intl.dev/) for i18n routing and message loading
- [Framer Motion](https://motion.dev/) for scroll/hover motion
- Deployed on [Vercel](https://vercel.com/)

## Features

- English (`/en`) and Chinese (`/zh`) routing via next-intl, with a
  language switcher and locale-aware navigation
- Localized metadata (titles, descriptions, Open Graph, Twitter cards,
  hreflang alternates) generated per page and per locale
- SEO fundamentals: `sitemap.xml`, `robots.txt`, canonical URLs, and a
  generated Open Graph image
- JSON-LD structured data (`Organization`, `WebSite`) rendered server-side
- An Insights hub with an explicit `published` / `draft` content status —
  only published articles are routable, listed, or included in the sitemap
- Responsive layout across mobile, tablet and desktop breakpoints
- Accessibility considerations: skip-to-content link, focus-visible states,
  `aria-controls`/`aria-expanded` on the mobile menu, Escape-to-close,
  `prefers-reduced-motion` support throughout the motion/animation layer
- Baseline HTTP security headers (`next.config.ts`)

## Project Structure

```text
src/app          # App Router routes, layouts, sitemap, robots, OG image
src/components    # UI, layout, and page-section components
src/content       # Structured content (Insights articles)
src/i18n          # next-intl routing/navigation config
messages          # en.json / zh.json translation files
public/images     # Photography and logo assets
```

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable               | Required    | Description                                                                                                                            |
| ----------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production  | The site's canonical `https://` URL. Used to build canonical links, hreflang alternates, Open Graph/Twitter URLs, and the sitemap. Falls back to `http://localhost:3000` in development; **the production build fails without it** rather than silently shipping localhost URLs. |

See [`.env.example`](./.env.example).

## Quality Checks

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # Next.js production build
npm run check      # lint + typecheck + build, in order
```

CI (`.github/workflows/ci.yml`) runs `lint`, `typecheck` and `build` on
every push and pull request.

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com/). Set
`NEXT_PUBLIC_SITE_URL` in the project's environment variables before
deploying — the production build will fail without it.
