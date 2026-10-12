# Shahrukhz Residences by Danube — SEO-Optimized Next.js Landing Page

A production-grade, 100% SEO-friendly luxury landing page built with **Next.js (App Router, Turbopack)**, **TypeScript**, and **Vanilla CSS**.

---

## 🚀 Key Features & SEO Architecture

### 1. Complete Meta Tags & OpenGraph Integration
- **Title & Description**: Configured with dynamic title template (`%s | Shahrukhz Residences`) and 155-160 character description optimized for click-through rate.
- **Canonical URLs & Hreflang**: Prevents duplicate content issues and supports international indexing.
- **Social Cards**: Full OpenGraph (`og:image`, `og:title`, `og:description`, `og:site_name`, `og:locale`) and Twitter Card (`summary_large_image`) metadata.
- **Dynamic OG Image Generator**: Automatically renders a high-res 1200x630 social preview at `/opengraph-image` and `/twitter-image` using `next/og`.
- **Search Engine Directives**: Robots configuration (`index: true`, `follow: true`, `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1`).
- **Geo-Targeting Meta**: Dubai regional coordinates (`geo.region: AE-DU`, `geo.placename: Dubai`, `ICBM`).

### 2. Structured Data (Schema.org JSON-LD)
Pre-configured, valid JSON-LD schemas enabling rich search result snippets on Google:
- **`RealEstateListing` & `ApartmentComplex`**: Pricing range, developer info, geo-coordinates, and amenities.
- **`RealEstateAgent` / `Organization`**: Danube Properties company details, legal entity, contact info, and official social channels.
- **`FAQPage`**: Injected on the homepage so Google displays collapsible question/answer accordions directly in SERPs.
- **`BreadcrumbList`**: Clean navigation hierarchy for Google search snippets.

### 3. Automated Technical SEO Routes
- **`sitemap.xml`** (`src/app/sitemap.ts`): Automatically lists all site URLs, update frequency, priority, and Google Image Search entries.
- **`robots.txt`** (`src/app/robots.ts`): Directs search engine crawlers (Googlebot, Bingbot, Applebot) and points to the sitemap.
- **`manifest.webmanifest`** (`src/app/manifest.ts`): Mobile app manifest for PWA capabilities and mobile search indexing.

### 4. Core Web Vitals & Accessibility
- **Zero CLS (Cumulative Layout Shift)**: Google Fonts (`Plus_Jakarta_Sans` & `Cinzel`) loaded with `display: 'swap'`.
- **Image Optimization**: All property assets in `/public/images/` loaded via Next.js `<Image>` with explicit dimensions, `sizes`, and descriptive keyword-rich `alt` text.
- **Semantic HTML5 & Accessibility**: Proper landmark tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`), skip-to-content keyboard link, and single `<h1>` hierarchy.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   └── images/               # High-res luxury property assets
├── src/
│   ├── app/
│   │   ├── globals.css       # Complete design system & custom CSS properties
│   │   ├── layout.tsx        # SEO metadata, fonts, viewport, and global JSON-LD
│   │   ├── manifest.ts       # Dynamic PWA manifest generator
│   │   ├── opengraph-image.tsx # Dynamic 1200x630 social card generator
│   │   ├── page.tsx          # High-converting landing page
│   │   ├── robots.ts         # Dynamic robots.txt
│   │   ├── sitemap.ts        # Dynamic sitemap.xml with image support
│   │   └── twitter-image.tsx # Dynamic Twitter card generator
│   ├── components/
│   │   └── seo/
│   │       ├── BreadcrumbJsonLd.tsx
│   │       ├── FaqJsonLd.tsx
│   │       ├── JsonLd.tsx
│   │       ├── OrganizationJsonLd.tsx
│   │       └── PropertyJsonLd.tsx
│   └── config/
│       └── site.ts           # Centralized configuration for all SEO & project details
├── package.json
└── tsconfig.json
```

---

## 🛠️ Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Generates 100% static prerendered pages and metadata routes.

### Linting
```bash
npm run lint
```

---

## ⚙️ How to Customize

1. **Update Site & Project Info**:
   Edit `src/config/site.ts` to adjust project name, prices, phone numbers, developer links, or keywords.
2. **Add Search Console Tokens**:
   In `src/config/site.ts`, replace `G-VERIFICATION_TOKEN_PLACEHOLDER` with your Google Search Console verification token.
3. **Add More Sections / Pages**:
   Add new sections inside `src/app/page.tsx` or new pages under `src/app/[slug]/page.tsx`.
