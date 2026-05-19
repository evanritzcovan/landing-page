import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

const ogImagePath = "/opengraph-image";

export function createSiteMetadata(): Metadata {
  const { name, title, description, url } = siteConfig;
  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s · ${name}`,
    },
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: name,
      title,
      description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
