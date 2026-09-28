# Flight 79

Public marketing website for **Flight 79**, an aviation-themed coffee and eatery
at Ruko Sasakirana 79, Kota Baru Parahyangan.

The site presents the venue, menu highlights, event capabilities, customer
reviews, location details, and a direct WhatsApp reservation flow. Its visual
direction combines an airport-lounge editorial layout with Flight 79's deep
navy, warm cream, coffee brown, aircraft silver, and amber palette.

## Features

- Responsive landing page for mobile, tablet, and desktop
- English and Indonesian language switcher
- Menu explorer with multiple food and beverage categories
- Venue gallery and event image slider
- Static customer review carousel with a Google Maps CTA
- Google Maps location embed and arrival information
- WhatsApp reservation form and conversion CTAs
- Instagram and TikTok links
- Local-business JSON-LD for `Restaurant` and `CafeOrCoffeeShop`
- Canonical, Open Graph, Twitter Card, robots, sitemap, and manifest metadata
- Reduced-motion support and keyboard-accessible interactive controls

## Technology

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vinext](https://github.com/cloudflare/vinext)
- Cloudflare Workers runtime
- pnpm `11.25.0`

## Requirements

- Node.js `>=22.13.0`
- pnpm `11.25.0`

Use pnpm for this project. Do not generate an npm or Yarn lockfile.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The local site is available at [http://localhost:5173](http://localhost:5173).
If that port is already occupied, Vinext will print the alternative port in the
terminal.

Create a production build:

```bash
pnpm build
```

Preview the built Worker locally:

```bash
pnpm start
```

Linting is available when specifically needed:

```bash
pnpm lint
```

Generated files are written to `dist/`. Do not edit that directory manually.

## Docker

The Docker image uses Vinext's standalone Node.js output and runs as a
non-root user on port `3000`.

Build the image locally:

```bash
docker build -t flight79:local .
```

Run it:

```bash
docker run --rm -p 3000:3000 flight79:local
```

Then open [http://localhost:3000](http://localhost:3000). The image includes a
health check for the homepage.

## CI/CD and Container Registry

The workflow in `.github/workflows/container.yml` uses GitHub Actions to:

1. Install dependencies and verify the production build on pull requests.
2. Build Linux images for AMD64 and ARM64.
3. Publish images after pushes to `main` or semantic version tags.

Images are published to GitHub Container Registry:

```text
ghcr.io/ihsnmuh/flight79
```

Available tags include `latest`, `sha-<commit>`, and semantic versions such as
`1.2.0` and `1.2` when a `v1.2.0` Git tag is pushed.

New GHCR packages are private by default. A private package requires a GitHub
token with `read:packages` on the VPS. A public package can be pulled without a
registry login.

Example VPS pull and run commands after the first image is published:

```bash
docker pull ghcr.io/ihsnmuh/flight79:latest
docker run -d --name flight79 --restart unless-stopped -p 3000:3000 \
  ghcr.io/ihsnmuh/flight79:latest
```

The workflow currently provides continuous delivery to GHCR. Automatic VPS
deployment is intentionally not enabled until the server host, SSH user,
deployment directory, reverse proxy, and secret-management approach are known.

## Project Structure

```text
app/
  layout.tsx        Global metadata and document shell
  page.tsx          Landing-page composition and section order
  globals.css       Brand tokens and shared visual styles
  manifest.ts       Web app manifest
  robots.ts         Crawler directives
  sitemap.ts        XML sitemap
components/
  sections/         Reusable landing-page sections
  ui/               Shared UI primitives
  event-slider.tsx  Special Occasions carousel
  menu-explorer.tsx Interactive menu categories
  review-slider.tsx Customer review carousel
data/
  flight79.ts       Editable site, business, menu, and media content
lib/
  i18n.ts           English and Indonesian interface copy
public/
  events/           Event photography
  menus/            Menu photography
  flight79-*.jpg    Venue and brand photography
```

## Editing Business Content

Frequently edited business data lives in [`data/flight79.ts`](data/flight79.ts),
including:

- Production site URL and SEO description
- Phone, email, address, opening hours, parking, and Maps URL
- WhatsApp reservation URL
- Instagram and TikTok profiles
- Menu categories and menu items
- Gallery images
- Reviews and event slides

Avoid scattering business information through components. Update the shared
data file so visible content, metadata, and structured data remain consistent.

The default language is English. Translations used by the language switcher
live in [`lib/i18n.ts`](lib/i18n.ts).

## Images

- Put venue images in `public/` and menu images in `public/menus/`.
- Use `next/image` with meaningful alt text and accurate responsive `sizes`.
- Keep the hero image optimized because it is the page's primary LCP candidate.
- Images below the fold should remain lazy-loaded.
- Generated imagery must be described as placeholder material and must not be
  presented as photography of the real venue or dishes.

## SEO

SEO configuration is split across:

- `app/layout.tsx`: page metadata, canonical URL, social cards, and crawler tags
- `app/robots.ts`: `/robots.txt`
- `app/sitemap.ts`: `/sitemap.xml`
- `app/manifest.ts`: `/manifest.webmanifest`
- `components/local-business-json-ld.tsx`: local-business structured data
- `data/flight79.ts`: canonical business and site values

Before deploying to a new domain, update `site.url` in `data/flight79.ts`. This
value is used for canonical links, Open Graph URLs, the sitemap, robots, and
JSON-LD identifiers.

Do not add `AggregateRating` or review markup for Flight 79's own curated Google
reviews. Google treats business-controlled review markup as self-serving and it
is not eligible for local-business review stars.

After deployment, verify the public URL with Google Search Console, Rich Results
Test, PageSpeed Insights, and URL Inspection.

## Deployment

The production build supports two deployment paths:

- Cloudflare-compatible Worker output under `dist/server/`.
- A standalone Node.js server under `dist/standalone/` for Docker or a VPS.

The Docker/VPS server should normally run behind a reverse proxy such as Nginx
or Caddy for TLS and domain routing. This is not a plain static HTML export.

Publishing to any external host requires explicit approval. A successful local
build does not deploy the website.

## Design and Implementation Notes

- Preserve the premium airport-lounge editorial direction.
- Use Barlow Condensed for display typography and Manrope for body copy.
- Keep mobile-first layouts and test mobile, tablet, and desktop breakpoints.
- Prefer Server Components; use `"use client"` only for real interaction.
- Maintain semantic sections, heading order, visible focus styles, and
  reduced-motion behavior.
- Track important CTA links using the existing `data-track` attributes.
- External links must use safe targets and `rel="noreferrer"`.
- Do not add ordering, payments, accounts, loyalty, or reservation backends
  without explicitly expanding the project scope.

## Verification Checklist

Before opening a pull request:

1. Confirm business information remains truthful and centralized.
2. Check mobile, tablet, and desktop layouts.
3. Run `pnpm build`.
4. Run `git diff --check`.
5. Verify affected interactions in the browser.

## Repository

[github.com/ihsnmuh/flight79](https://github.com/ihsnmuh/flight79)
