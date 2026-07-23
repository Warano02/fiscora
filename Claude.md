# Fiscora - Claude.md

## Project

Fiscora is a premium accounting firm website built to showcase a modern, trustworthy and high-end accounting practice.

The objective is not simply to create a beautiful website, but to build a digital experience that immediately inspires confidence, professionalism and expertise.

Every design decision must communicate precision, reliability and credibility.

This project must look like it was designed by a top digital agency.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP
- React Hook Form
- Zod
- Lucide Icons

---

## Design Philosophy

Minimal.

Elegant.

Premium.

Corporate.

Confident.

Timeless.

Avoid startup clichés.

Avoid unnecessary decorations.

Avoid flashy effects.

Every section should breathe.

Large spacing.

Perfect typography.

Subtle shadows.

Rounded corners.

Professional illustrations.

Lots of white space.

---

## Visual References

Take inspiration from:

- Stripe
- Mercury
- Brex
- Vercel
- Ramp
- Linear
- Raycast

Do NOT copy.

Only use them as inspiration for spacing, typography, layout and polish.

---

## Color Palette

Primary
#0F172A

Secondary
#2563EB

Accent
#10B981

Background
#F8FAFC

Text
#1E293B

Muted
#64748B

Border
#E2E8F0

Cards should remain white.

Use color sparingly.

---

## Typography

Primary Font:

Manrope

Fallback:

Inter

Hierarchy should be extremely clear.

Large headings.

Comfortable paragraph width.

Generous line height.

Readable at every screen size.

---

## Animations

Animations must feel premium.

Never distracting.

Use GSAP.

Allowed animations:

- Fade In
- Reveal on Scroll
- Stagger
- Counter Animation
- Card Hover
- Section Transition
- Smooth Anchor Navigation
- Button Hover
- Navbar Transition

Animation duration:

0.5s - 1.2s

Animation should never reduce readability.

No excessive parallax.

No Three.js.

No flashy effects.

---

## Project Structure

`app/` (the Next.js App Router) stays at the project root. All other application code lives under `src/`.

```
app/
  [locale]/          Localized routes (all pages live here)
    layout.tsx        root layout: fonts, <html lang>, metadata, NextIntlClientProvider
    page.tsx
    about/
    services/
    industries/
    contact/
    privacy/
  globals.css
  favicon.ico

proxy.ts              Next.js 16 renamed `middleware.ts` to `proxy.ts` (see Internationalization).
                       Lives at the project root, next to `app/`.

src/
  components/
    ui/               shadcn/ui primitives (generated, base-ui + class-variance-authority)
    sections/
    layout/
    icons/
  i18n/
    routing.ts        locales, default locale, pathnames
    navigation.ts      typed Link, useRouter, usePathname, redirect
    request.ts         next-intl request config
  messages/
    fr/
      Common.json        Metadata + Nav + Footer, shared across every page
      Home.json
      About.json
      Services.json
      ServiceAccounting.json
      ...                one small file per page/namespace
      index.ts            merges all fr/*.json into the locale's messages object
    en/                  mirrors fr/ 1:1
  const/
    project.ts         single source of truth for business info (name, contact, services, industries, social, nav)
  lib/
    utils.ts            shadcn `cn()` helper
    metadata.ts          shared generateMetadata helper for localized pages
```

Root-level config files (`next.config.ts`, `tsconfig.json`, `package.json`, `.env*`, `components.json`) stay at the project root. `/public` stays at the root. Path alias: `@/*` → `./src/*`.

The project uses shadcn/ui (`base-nova` style, `@base-ui/react` primitives, Lucide icons) for the `ui/` component layer — generate new primitives with the shadcn CLI rather than hand-rolling, and keep `app/globals.css`'s CSS variables (background, foreground, primary, secondary, accent, muted, border, etc.) as the single source of truth for shadcn's theme tokens, mapped to the Color Palette above.

---

## Internationalization (i18n)

Library: next-intl.

Locales: `fr` (default), `en`.

URL strategy: locale prefix always visible (`/fr/...`, `/en/...`). No unprefixed default locale.

Routing rules:

- All pages live under `app/[locale]/`.
- Locale config centralized in `src/i18n/routing.ts`.
- Use the typed navigation APIs from `src/i18n/navigation.ts` (`Link`, `useRouter`, `usePathname`, `redirect`) instead of `next/link` / `next/navigation` directly, so locale prefixes are handled automatically.
- Translated strings live in `src/messages/{locale}/`, split into **one small JSON file per page/namespace** (e.g. `Home.json`, `ServiceAccounting.json`), not one giant file per locale — this keeps files short and easy to review as the number of pages/sections grows. Cross-page strings (nav, footer, site metadata) live in `Common.json`. Each locale's `index.ts` merges its `*.json` files into the messages object consumed by `next-intl`.
- When a page grows large sections (e.g. a homepage with many blocks), nest the section copy as sub-keys inside that page's own file (`Home.json` → `{ "Hero": {...}, "TrustedBy": {...} }`) rather than creating a new top-level file per section — one file per **page**, not per section.
- Business-specific, locale-independent data (name, contact, legal info, services/industries slugs, social links) lives in `src/const/project.ts`, not in the messages files.
- Every page calls `setRequestLocale(locale)` and builds its metadata with `buildPageMetadata()` from `src/lib/metadata.ts` (title, description, canonical, hreflang alternates).

Next.js 16 breaking change: `middleware.ts` is deprecated and renamed to `proxy.ts`. Since `app/` lives at the project root (not under `src/`), `proxy.ts` also lives at the project root, at the same level as `app/`, exporting the next-intl `createMiddleware(routing)` function as the default export.

Every localized page must provide `generateStaticParams` (via the shared locales list) and a `generateMetadata` with translated `title`/`description`, canonical URL, and `alternates.languages` (hreflang) for every locale, per the SEO section below.

---

## Components

All components must be reusable.

Create dedicated folders.

Examples:

components/
    ui/
    sections/
    layout/
    icons/

Every component must have:

- clean API
- reusable props
- accessibility
- responsive design

---

## Layout

Maximum content width:

1280px (max-w-7xl)

Large paddings.

Consistent vertical rhythm.

Grid based layout.

8px spacing system.

---

## UI Principles

Every card should have:

- subtle shadow
- rounded corners
- hover elevation

Buttons:

Primary

Secondary

Ghost

Outline

Forms:

Large inputs.

Rounded.

Accessible.

Clear validation.

---

## Homepage Sections

Hero

Trusted By

About

Services

---

## Notes

- A floating WhatsApp CTA has been added globally in the layout for faster contact.
- Hero and services animation behavior was adjusted to ensure all text and service cards remain visible.

Why Choose Us

Industries

Numbers

Testimonials

Latest Articles

CTA

Footer

---

## Services

Accounting

Tax Advisory

Payroll

Business Creation

Audit

Financial Consulting

Legal Assistance

---

## Industries

Healthcare

Construction

Restaurants

Retail

Technology

E-commerce

Liberal Professions

Associations

---

## Tone

Professional.

Human.

Confident.

Clear.

Never exaggerated.

Never use marketing clichés.

Avoid buzzwords.

Explain things simply.

---

## SEO

Every page must include:

- title
- description
- canonical
- OpenGraph
- Twitter Card
- Schema.org

Semantic HTML is mandatory.

Perfect heading hierarchy.

Accessibility score should be excellent.

Performance should target Lighthouse 95+.

---

## Performance

Lazy load images.

Optimize fonts.

Optimize bundle.

Avoid unnecessary client components.

Prefer Server Components whenever possible.

---

## Mobile First

Design mobile first.

Perfect experience from 360px to 1920px.

Touch friendly.

Responsive typography.

---

## Code Quality

Write clean and maintainable code.

Never duplicate logic.

Never over-engineer.

Use meaningful component names.

Strong TypeScript typing.

Follow modern React best practices.

Never use unecessary comment.


---

## Reusability

Every section must be designed as an independent reusable block.

The template should be easy to adapt for:
- Law Firms
- Consulting Firms
- Financial Advisors
- Insurance Companies
- Recruitment Agencies
- Investment Firms

Avoid hardcoded business-specific logic.

All texts, images, colors and statistics must be easily replaceable.

## Final Goal

The final result should feel like a website built by a premium digital agency charging €10,000+ for corporate websites.

The visitor should immediately think:

"This accounting firm is trustworthy, experienced, modern and worth contacting."