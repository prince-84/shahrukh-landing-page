# Shahrukhz Residences by Danube — SEO-Optimized Next.js Website

A production-grade, 100% SEO-optimized luxury real estate website built with **Next.js (App Router, Turbopack)**, **TypeScript**, and **Vanilla CSS**.

---

## 🚀 Key Features & SEO Architecture

### 1. Complete Meta Tags & OpenGraph Integration
- **Page-Specific Metadata**:
  - **Home (`/`)**:
    - Title: `Shahrukhz Residences by Danube in Dubai Maritime City`
    - Description: `Shahrukhz Residences by Danube in Dubai Maritime City. Discover apartment prices, floor plans, the 30/70 payment plan and expected handover.`
  - **Prices (`/prices` & `/price`)**:
    - Title: `Shahrukhz Residences Prices 2026 | Apartment Price List`
    - Description: `Shahrukhz Residences prices from AED 1.65M. Compare studio, 1, 2 and 3-bedroom apartments, sea views, and payment plans in Dubai.`
  - **Payment Plan (`/payment-plan`)**:
    - Title: `Shahrukhz Residences Payment Plan 2026 | 30/70 Installments`
    - Description: `Shahrukhz Residences 30/70 payment plan, booking payment, construction instalments and expected handover in Dubai Maritime City.`
- **Internal Linking Network**: Contextual internal links between Homepage, Prices, and Payment Plan pages for crawlability and PageRank distribution.
- **Canonical URLs & Hreflang**: Prevents duplicate content issues and supports international indexing (`en-US`, `en-AE`).
- **Social Cards**: Full OpenGraph (`og:image`, `og:title`, `og:description`, `og:site_name`, `og:locale`) and Twitter Card (`summary_large_image`) metadata.
- **Dynamic OG Image Generator**: Automatically renders a high-res 1200x630 social preview at `/opengraph-image` and `/twitter-image` using `next/og`.
- **Search Engine Directives**: Robots configuration (`index: true`, `follow: true`, `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1`).

### 2. Interactive 30/70 Payment Plan Calculator
- Recalculated for units starting from **AED 1.65M**:
  - **10% Down Payment**: Within 21 days of booking (AED 165,000)
  - **10% 2nd Instalment**: 2 months from booking (AED 165,000)
  - **5% 3rd Instalment**: 10 months from booking (AED 82,500)
  - **5% 4th Instalment**: 18 months from booking (AED 82,500)
  - **70% On Handover**: Expected December 2029 (AED 1,155,000)
- Interactive dropdown selector across all unit types (Studios, 1 BHK, 2 BHK, 3 BHK).

### 3. Structured Data (Schema.org JSON-LD)
Pre-configured, valid JSON-LD schemas enabling rich search result snippets on Google:
- **`HomePageSchema`**: WebSite, Organization, and WebPage entities.
- **`FAQPage`**: Accordion FAQs on Home, Prices, and Payment Plan pages injected via `FaqJsonLd` for Google Rich Snippets.
- **`RealEstateListing` & `Property`**: Comprehensive property specifications and developer data.

### 4. Automated Technical SEO Routes
- **`sitemap.xml`** (`src/app/sitemap.ts`): Automatically lists all site URLs, update frequency, priority, and Google Image Search entries.
- **`robots.txt`** (`src/app/robots.ts`): Directs search engine crawlers (Googlebot, Bingbot, Applebot) and points to the sitemap.
- **`manifest.webmanifest`** (`src/app/manifest.ts`): Mobile app manifest for PWA capabilities and mobile search indexing.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/               # High-res luxury property assets & logos
├── src/
│   ├── app/
│   │   ├── disclaimer/       # Disclaimer page
│   │   ├── payment-plan/     # 30/70 Payment Plan calculator & FAQs
│   │   ├── price/            # Price alias route
│   │   ├── prices/           # Configuration & pricing tables & FAQs
│   │   ├── privacy-policy/   # Privacy policy
│   │   ├── terms-and-conditions/ # Terms & Conditions
│   │   ├── globals.css       # Complete design system & custom CSS properties
│   │   ├── layout.tsx        # SEO metadata, fonts, viewport, and global JSON-LD
│   │   ├── manifest.ts       # Dynamic PWA manifest generator
│   │   ├── opengraph-image.tsx # Dynamic 1200x630 social card generator
│   │   ├── page.tsx          # High-converting landing page with EOI form & FAQs
│   │   ├── robots.ts         # Dynamic robots.txt
│   │   ├── sitemap.ts        # Dynamic sitemap.xml with image support
│   │   └── twitter-image.tsx # Dynamic Twitter card generator
│   ├── components/
│   │   ├── amenities/        # Amenities carousel
│   │   ├── footer/           # Brand footer with legal links
│   │   ├── forms/            # Inquire & EOI form with auto-geo country dialer
│   │   ├── gallery/          # Tabbed visual showcase & media gallery
│   │   ├── navigation/       # Responsive navbar
│   │   ├── payment-plan/     # Dynamic payment plan calculator
│   │   ├── seo/              # JsonLd, FaqJsonLd, HomePageSchema
│   │   └── video/            # Full-width video separator
│   └── config/
│       └── site.ts           # Centralized configuration for SEO & property details
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

### Type Check & Build
```bash
npx tsc --noEmit
npm run build
```

---

## ⚙️ Configuration

1. **Site & Property Information**:
   Edit `src/config/site.ts` to adjust project name, prices, phone numbers, developer links, or keywords.
2. **Environment Variables**:
   Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or deployment platform settings (defaults to `https://shahrukhz-residence.com`).
