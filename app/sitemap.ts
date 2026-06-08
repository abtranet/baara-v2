import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { sitemapRoutes } from "@/lib/routes";

// When NEXT_PUBLIC_INDEXING=false, returns a minimal sitemap to avoid conflicting with the live site.
// Set NEXT_PUBLIC_INDEXING=true to include full canonical production URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexing) {
    return [];
  }

  return sitemapRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
