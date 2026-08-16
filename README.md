# Jody D. Peterman, LLC — Personal Injury Law Firm Website

A 20+ page, SEO-optimized personal injury law firm site built with **Next.js 14 (App
Router)**, **Tailwind CSS**, and **Framer Motion**. Layout, page structure, and UX
patterns mirror a light, trust-driven home-services template, adapted for a South
Georgia law firm.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered as static HTML/SSG)
npm start        # serve the production build
```

## Page inventory (21 routes)

| Section | Routes |
|---|---|
| Core | `/` · `/about` · `/contact` |
| Practice Areas | `/practice-areas` + 7 pages (`car-accidents`, `truck-accidents`, `motorcycle-accidents`, `wrongful-death`, `slip-and-fall`, `workers-compensation`, `medical-malpractice`) |
| Service Areas | `/locations` + 6 pages (`fitzgerald`, `valdosta`, `tifton`, `albany`, `adel`, `cordele`) |
| Blog | `/blog` + 2 articles |
| Legal | `/privacy-policy` · `/disclaimer` · `/sitemap` |
| SEO | `/robots.txt` · `/sitemap.xml` (auto-generated) |

## Architecture

- **`lib/site.js`** — single source of truth for firm info, practice areas, locations,
  reviews, FAQs, and blog posts. Practice-area, location, and blog pages are generated
  from this data via dynamic routes + `generateStaticParams`.
- **`lib/seo.js`** — `buildMetadata()` (unique title, description, canonical, Open Graph)
  and Schema.org JSON-LD builders (LegalService, Attorney, LocalBusiness, FAQPage,
  BreadcrumbList).
- **`components/`** — shared shell (Header w/ mega-menu + cities sub-bar, Footer,
  FloatingButtons, Breadcrumb) and reusable sections (`sections.jsx`, `FAQ`, `FindUs`).
- **`app/`** — App Router pages + `layout.jsx` (fonts, GA4 tag, site chrome).

Every section uses scroll-triggered fade-up reveals (`components/FadeUp.jsx`).

## ⚠️ Placeholders to replace before launch

These are realistic stand-ins — swap them for the firm's verified details:

1. **GA4 tag** — `app/layout.jsx`, replace `G-XXXXXXXXXX` with the real Measurement ID.
2. **Contact info** — `lib/site.js` (`firm`, `offices`): phone numbers `(229) 555-01xx`,
   email, street addresses, and office hours are placeholders.
3. **Canonical domain** — `lib/site.js` `SITE_URL` (currently `https://www.petermanlawllc.com`).
4. **Images** — hero/section images use Unsplash URLs (`next.config.mjs` whitelists the
   host). Replace with the firm's own photography; keep the `alt` text.
5. **Contact form** — `components/ContactForm.jsx` is front-end only; wire `handleSubmit`
   to your CRM / email endpoint.
6. **Attorney bio & credentials** — `app/about/page.jsx` copy should be reviewed for
   accuracy (bar admissions, awards, memberships).
7. **`/og-default.jpg` & `/favicon.ico`** — add these files to `public/`.

## Design system

- Colors: white `#FFFFFF` / warm-gray `#F7F6F3` alternating; deep navy `#0B1E33`;
  gold accent `#C9A84C`. (Defined in `tailwind.config.js`.)
- Fonts: Playfair Display (headings) + Inter (body), loaded via `next/font`.
- Gold-fill buttons with navy text, consistent radius site-wide (`components/ui.jsx`).
