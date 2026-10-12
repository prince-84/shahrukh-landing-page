import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero-img.webp`,
        `${baseUrl}/images/shahrukhz-residences-by-danube-waterfront-development.webp`,
        `${baseUrl}/images/shahrukhz-residences-by-danube-kings-suite.webp`,
        `${baseUrl}/images/shahrukhz-residences-by-danube-living-room.webp`,
        `${baseUrl}/images/shahrukhz-residences-by-danube-penthouse.webp`,
        `${baseUrl}/images/infinity_pool-2.webp`,
        `${baseUrl}/images/shahrukhz-residences-by-danube-beach-lagoon.webp`,
      ],
    },
    {
      url: `${baseUrl}/prices`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/images/hero-img.webp`,
      ],
    },
    {
      url: `${baseUrl}/payment-plan`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/images/hero-img.webp`,
      ],
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
