import React from "react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbJsonLdProps {
  items?: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({
  items = [
    { name: "Home", item: siteConfig.url },
    { name: "Dubai Off-Plan Properties", item: `${siteConfig.url}/#overview` },
    { name: siteConfig.name, item: siteConfig.url },
  ],
}: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return <JsonLd data={schema} />;
}
