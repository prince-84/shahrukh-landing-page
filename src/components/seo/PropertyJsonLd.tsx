import React from "react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export function PropertyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateListing", "ApartmentComplex"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: [
      `${siteConfig.url}/images/hero-img.webp`,
      `${siteConfig.url}/images/shahrukhz-residences-by-danube-waterfront-development.webp`,
      `${siteConfig.url}/images/shahrukhz-residences-by-danube-kings-suite.webp`,
      `${siteConfig.url}/images/shahrukhz-residences-by-danube-penthouse.webp`,
      `${siteConfig.url}/images/infinity_pool-2.webp`,
      `${siteConfig.url}/images/shahrukhz-residences-by-danube-beach-lagoon.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Rooftop Infinity Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "King's Club Deck & Sky Lounge",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Lagoon & Beach Access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Indoor Gym & Longevity Health Lounge",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Dedicated Sports & Aquatic Hub",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Concierge and Valet Parking",
        value: true,
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: "1650000",
      highPrice: "6500000",
      offerCount: "120",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "RealEstateAgent",
        name: siteConfig.developer.name,
        url: siteConfig.developer.url,
      },
    },
  };

  return <JsonLd data={schema} />;
}
