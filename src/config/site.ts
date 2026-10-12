export const siteConfig = {
  name: "Shahrukhz Residences by Danube",
  shortName: "Shahrukhz Residences",
  year: 2026,
  tagline: "Ultra-Luxury Waterfront Living in Dubai Maritime City with 30/70 Payment Plan",
  description:
    "Discover Shahrukhz Residences by Danube in Dubai Maritime City, starting at AED 1.65M. Explore studios, apartments and penthouses with a 30/70 payment plan and Q4 2029 completion.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shahrukhz-residence.com",
  ogImage: "/images/hero-img.webp",
  developer: {
    name: "Danube Properties",
    url: "https://danubeproperties.com",
    establishedYear: 1993,
    headquarters: "Dubai, United Arab Emirates",
  },
  contact: {
    phone: "+971 4 123 4567",
    whatsapp: "+971 50 123 4567",
    email: "inquiries@shahrukhz-residences.com",
    address: {
      streetAddress: "Dubai Maritime City",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      latitude: 25.2697,
      longitude: 55.2758,
    },
  },
  projectDetails: {
    propertyType: "Fully Furnished Waterfront Residences & Penthouses",
    location: "Dubai Maritime City",
    startingPrice: "AED 1,650,000",
    unitTypes: [
      { type: "1 Bedroom Luxury Suite", size: "From 780 Sq.Ft.", startingPrice: "AED 1,650,000" },
      { type: "2 Bedroom Waterfront Residence", size: "From 1,250 Sq.Ft.", startingPrice: "AED 2,350,000" },
      { type: "3 Bedroom Executive Suite", size: "From 1,850 Sq.Ft.", startingPrice: "AED 3,200,000" },
      { type: "Exclusive Sky Penthouse", size: "From 2,800 Sq.Ft.", startingPrice: "AED 5,500,000" },
    ],
    handoverDate: "Q4-2029",
    paymentPlan: "30/70 Payment Plan",
    currency: "AED",
    ownership: "100% Freehold for All Nationalities",
  },
  keywords: [
    "Shahrukhz Residences by Danube",
    "Shahrukhz Residences Dubai",
    "Danube Properties new launch",
    "Dubai luxury apartments for sale",
    "1% monthly payment plan Dubai",
    "Danube off-plan properties",
    "Waterfront apartments in Dubai",
    "Invest in Dubai real estate",
    "Freehold property Dubai",
    "Danube King's Suite",
    "Dubai Golden Visa property investment",
  ],
  socials: {
    twitter: "https://twitter.com/DanubeProperties",
    instagram: "https://instagram.com/DanubeProperties",
    facebook: "https://facebook.com/DanubeProperties",
    linkedin: "https://linkedin.com/company/danubeproperties",
    youtube: "https://youtube.com/DanubeProperties",
  },
  verification: {
    google: "G-VERIFICATION_TOKEN_PLACEHOLDER",
    yandex: "YANDEX_VERIFICATION_TOKEN_PLACEHOLDER",
    bing: "BING_VERIFICATION_TOKEN_PLACEHOLDER",
  },
} as const;

export type SiteConfig = typeof siteConfig;
