import React from "react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export function HomePageSchema() {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.name,
        url: `${baseUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/SHARUK KHAN LOGO-03.svg`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: siteConfig.name,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: `${baseUrl}/`,
        name: "Shahrukhz Residences by Danube - Luxury Waterfront Apartments in Dubai Maritime City",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@type": "Place",
          name: siteConfig.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
      },
    ],
  };

  return <JsonLd data={schema} />;
}
