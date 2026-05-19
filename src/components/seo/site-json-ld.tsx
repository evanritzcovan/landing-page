import { siteConfig } from "@/data/site";

export function SiteJsonLd() {
  const { name, description, url, links } = siteConfig;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description,
    url,
    sameAs: [links.github, links.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
