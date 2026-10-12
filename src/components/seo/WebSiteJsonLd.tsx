import React from "react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["Shahrukhz Residences", "Shahrukhz by Danube", "Shahrukhz Maritime City"],
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.developer.name,
      url: siteConfig.developer.url,
    },
    inLanguage: "en-US",
  };

  return <JsonLd data={schema} />;
}
