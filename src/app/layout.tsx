import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import { siteConfig } from "@/config/site";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { PropertyJsonLd } from "@/components/seo/PropertyJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const luxuryFont = Cinzel({
  variable: "--font-luxury",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#003043" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shahrukhz Residences by Danube Waterfront Apartment in Dubai",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Discover Shahrukhz Residences by Danube in Dubai Maritime City, starting at AED 1.65M. Explore studios, apartments and penthouses with a 30/70 payment plan and Q4 2029 completion.",
  keywords: [
    ...siteConfig.keywords,
    "Shahrukhz Residences prices",
    "Shahrukhz Residences payment plan",
    "Dubai Maritime City luxury apartments",
    "Danube off-plan 30/70",
  ],
  authors: [{ name: siteConfig.developer.name, url: siteConfig.developer.url }],
  creator: siteConfig.developer.name,
  publisher: siteConfig.developer.name,
  applicationName: siteConfig.shortName,
  category: "Real Estate",
  classification: "Luxury Residential Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/SHARUK%20KHAN%20LOGO-02.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "en-AE": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Shahrukhz Residences by Danube Waterfront Apartment in Dubai",
    description:
      "Discover Shahrukhz Residences by Danube in Dubai Maritime City, starting at AED 1.65M. Explore studios, apartments and penthouses with a 30/70 payment plan and Q4 2029 completion.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-img.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Waterfront Living by Danube Properties`,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrukhz Residences by Danube Waterfront Apartment in Dubai",
    description:
      "Discover Shahrukhz Residences by Danube in Dubai Maritime City, starting at AED 1.65M. Explore studios, apartments and penthouses with a 30/70 payment plan and Q4 2029 completion.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: ["/images/hero-img.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.verification.google,
    yandex: siteConfig.verification.yandex,
    other: {
      "msvalidate.01": siteConfig.verification.bing,
    },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": `${siteConfig.contact.geo.latitude};${siteConfig.contact.geo.longitude}`,
    ICBM: `${siteConfig.contact.geo.latitude}, ${siteConfig.contact.geo.longitude}`,
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${luxuryFont.variable}`}>
      <head>
        {/* Preconnect to improve resource load speed for Google Fonts and CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical link */}
        <link rel="canonical" href={siteConfig.url} />

        {/* Search Engine Robots & Crawling Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Global Structured Data Schemas */}
        <WebSiteJsonLd />
        <OrganizationJsonLd />
        <PropertyJsonLd />
        <BreadcrumbJsonLd />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
