import type { MetadataRoute } from "next";
import { site } from "@/data/flight79";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/flight79-hero.jpg`],
    },
  ];
}
