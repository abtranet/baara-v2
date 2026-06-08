import type { Metadata } from "next";
import { site } from "./site";

interface PageSeoProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageSeoProps): Metadata {
  const indexing = site.indexing;
  const shouldIndex = indexing && !noIndex;
  const canonical = `${site.url}${path}`;
  const fullTitle = title ? `${title} | ${site.name}` : site.tagline;

  return {
    title: fullTitle,
    description: description || site.description,
    robots: shouldIndex
      ? { index: true, follow: true }
      : { index: false, follow: false },
    ...(shouldIndex && {
      alternates: { canonical },
      openGraph: {
        title: fullTitle,
        description: description || site.description,
        url: canonical,
        siteName: site.name,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: description || site.description,
      },
    }),
  };
}
