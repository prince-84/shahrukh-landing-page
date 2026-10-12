import React from "react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.developer.name,
    legalName: `${siteConfig.developer.name} LLC`,
    url: siteConfig.developer.url,
    logo: `${siteConfig.url}/images/hero-img.webp`,
    image: `${siteConfig.url}/images/shahrukhz-residences-by-danube-waterfront-development.webp`,
    description: "Leading private real estate developer in the UAE, renowned for 1% monthly payment plan projects.",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    sameAs: [
      siteConfig.socials.twitter,
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.linkedin,
      siteConfig.socials.youtube,
    ],
  };

  return <JsonLd data={schema} />;
}
