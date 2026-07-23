# Fiscora — Project Progress

Last updated: 2026-07-23

## Status: Site shell, service cards and WhatsApp CTA implemented

Routing, internationalization and the base design system are wired up and build-verified. The homepage shell is now functional, the services cards render correctly, and a floating WhatsApp CTA has been added.

---

## Completed

- [x] Tech stack decided (Next.js 16 App Router, TypeScript, Tailwind CSS v4, GSAP, React Hook Form, Zod, Lucide Icons) — see `Claude.md`
- [x] Design system spec defined (colors, typography, spacing, animation rules) — see `Claude.md`
- [x] i18n strategy decided and implemented: next-intl, locales `fr` (default) + `en`, always-prefixed URLs (`/fr`, `/en`)
- [x] Architecture convention: `app/` stays at project root, everything else (`components`, `i18n`, `messages`, `const`, `lib`) lives under `src/`, path alias `@/*` → `./src/*`
- [x] `proxy.ts` created at the project root (Next.js 16 `middleware.ts` → `proxy.ts` rename)
- [x] `src/i18n/routing.ts`, `src/i18n/navigation.ts`, `src/i18n/request.ts` created
- [x] `src/messages/{fr,en}/` split into one small JSON file per page/namespace (`Common`, `Home`, `About`, `Services` + 4 sub-pages, `Industries` + 2 sub-pages, `Contact`, `Privacy`), merged per locale via `index.ts` — avoids one huge monolithic translation file as pages/sections grow
- [x] `next.config.ts` wired with the `next-intl` plugin
- [x] All routes moved to `app/[locale]/...` and converted to localized server components (`setRequestLocale`, `generateMetadata`, translated headings)
- [x] `src/lib/metadata.ts` shared helper for per-page SEO metadata (title, description, canonical, hreflang alternates)
- [x] Root layout (`app/[locale]/layout.tsx`): Manrope + Inter fonts, `<html lang>`, `NextIntlClientProvider`, site-wide metadata (title template, OG, Twitter, canonical, hreflang)
- [x] `src/const/project.ts` created: name, contact, legal info, socials, nav, full services (7) and industries (8) lists — single source of truth, locale-independent
- [x] `src/const/project.ts` extended with WhatsApp contact info for global CTA
- [x] `app/globals.css` rewritten with the `Claude.md` color palette, Manrope/Inter font stack, and shadcn/ui theme tokens (light + dark variants)
- [x] Floating WhatsApp CTA added in `app/[locale]/layout.tsx`
- [x] shadcn/ui detected and integrated (`base-nova` style, `@base-ui/react`, Lucide icons, `src/components/ui/`, `src/lib/utils.ts`)
- [x] Verified with `next build` (all `/fr` and `/en` routes statically generated) and `next dev` (locale redirect `/` → `/fr`, translated `<title>` confirmed)

## Not Yet Done

### Content & structure
- [ ] `app/sitemap.ts` / `app/robots.ts`
- [ ] JSON-LD Schema.org (Organization/ProfessionalService) in root layout, using `project.ts` data
- [ ] `src/components/` sections/layout structure (`sections/`, `layout/`, `icons/`)
- [ ] Homepage sections: Trusted By, About, Why Choose Us, Industries, Numbers, Testimonials, Latest Articles, CTA, Footer
- [ ] Real page content for About, Services (+ remaining 3 sub-pages: business-creation, financial-consulting, legal-assistance), Industries (+ remaining 6 sub-pages: restaurants, retail, technology, ecommerce, liberal-professions, associations), Contact, Privacy
- [ ] Contact form (React Hook Form + Zod) — not yet installed
- [ ] GSAP animations (fade in, reveal on scroll, stagger, counters, hover, transitions)
- [ ] Header/Nav + Footer components (using `project.ts` nav data + `src/i18n/navigation.ts` `Link`)

## Next Feature To Implement

Layout shell: `src/components/layout/` (Header/Nav with locale switcher, Footer), then the homepage sections in order (Hero → Trusted By → About → Services → ...).

---

## Key Decisions Log

- **Structure**: `app/` at project root; `components`, `i18n`, `messages`, `const`, `lib` under `src/`. `@/*` → `./src/*`.
- **i18n**: next-intl, locales fr (default) + en, prefix always visible (`/fr`, `/en`).
- **Next.js 16 breaking change**: `middleware.ts` → `proxy.ts`, placed at the project root next to `app/`.
- **shadcn/ui**: already initialized by the user (`base-nova` style, neutral base color, `@base-ui/react` primitives) before this session — `app/globals.css` theme tokens were remapped to the `Claude.md` palette rather than replaced, to stay compatible with generated `ui/` components.
- **Metadata**: centralized per-page via `src/lib/metadata.ts#buildPageMetadata(locale, namespace, path)` to avoid duplicating canonical/hreflang logic across every page.
- **Messages structure**: one JSON file per page/namespace under `src/messages/{locale}/`, not one file per locale — keeps files short and reviewable even for pages with many sections (nest sections as sub-keys inside that page's own file, not as separate top-level files).