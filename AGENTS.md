# Flight 79 Project Guide

## Product

Flight 79 is a public marketing landing page for an aviation-themed coffee and
eatery at Ruko Sasakirana 79, Kota Baru Parahyangan. The primary conversion is
a table reservation through WhatsApp. The brand promise is “First-class flavor
on every plate.”

Write customer-facing copy primarily in Indonesian. Use short English aviation
phrases only where they feel natural, such as “Signature Flights,” “Reserve Your
Seat,” and “Ready for Take-Off?” Keep the tone premium, welcoming, and lightly
playful; avoid technical aviation jargon and airline-template language.

## Stack and Commands

- Next.js App Router, React, TypeScript, Tailwind CSS 4, and Vinext.
- Package manager: pnpm 11.25.0. Do not introduce another lockfile.
- Develop: `pnpm dev`
- Production verification: `pnpm build`
- Lint only when requested: `pnpm lint`
- Do not edit generated output in `dist/`.

## Source Layout

- `app/page.tsx`: landing-page composition and section order.
- `app/globals.css`: brand tokens and shared visual primitives.
- `app/layout.tsx`: metadata, locale, icons, and global document shell.
- `data/flight79.ts`: editable menu, contact, event, and experience content.
- `components/`: reusable site components and client-side interactions.
- `components/ui/`: starter UI primitives; compose them instead of modifying
  vendored primitives unless a framework-level fix is required.
- `public/flight79-*.jpg`: current editable/generated photography assets.

## Visual System

- Preserve the premium airport-lounge editorial direction.
- Core colors: deep navy, warm cream, coffee brown, aircraft silver, and amber.
- Display type: Barlow Condensed. Body type: Manrope.
- Use generous whitespace, asymmetric editorial layouts, hairline borders,
  boarding-pass geometry, route/runway details, and restrained motion.
- Food and cafe imagery must remain the visual focus.
- Avoid generic SaaS gradients, rounded card grids, childish airplane graphics,
  excessive animation, and default system fonts.
- Define reusable visual values through CSS custom properties.

## Content Integrity

- Never invent official menu prices, opening hours, ratings, customer reviews,
  parking details, landmarks, or social handles.
- Keep unknown information explicitly labeled as a placeholder until supplied.
- Preserve the official contact details and Maps URL in `data/flight79.ts`.
- Generated imagery is placeholder material; do not represent it as photography
  of the real venue or real dishes.
- Centralize frequently edited business content in `data/flight79.ts` rather
  than scattering literals through components.

## Implementation Conventions

- Prefer Server Components. Add `"use client"` only for genuine interaction.
- Keep components focused and reusable; do not move all page content into a
  single client component.
- Use `next/image` with meaningful alt text and accurate responsive `sizes`.
- Below-the-fold images should remain lazy-loaded by default.
- Use semantic sections, correct heading order, accessible names, keyboard-safe
  controls, visible focus styles, and reduced-motion support.
- Maintain mobile-first behavior and verify mobile, tablet, and desktop layouts.
- Keep CTA tracking through `data-track`; supported actions include WhatsApp,
  directions, menu, phone, email, and event clicks.
- External links must use safe targets and `rel="noreferrer"` where applicable.
- Do not add ordering, payments, accounts, loyalty, dashboards, or a reservation
  backend unless the user explicitly expands the scope.

## Change Checklist

1. Update editable business content in `data/flight79.ts` where possible.
2. Preserve the established design thesis and responsive behavior.
3. Confirm placeholders remain truthful and clearly labeled.
4. Run `pnpm build` after meaningful source changes.
5. Publishing or exporting source to an external host requires explicit user
   approval; local implementation alone does not authorize deployment.
