import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// When NEXT_PUBLIC_INDEXING=false, disallows all crawling to protect the live baara.us site.
// Set NEXT_PUBLIC_INDEXING=true when this repo replaces the live site.
export default function robots(): MetadataRoute.Robots {
  if (!site.indexing) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
