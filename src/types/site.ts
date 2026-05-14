export type SiteLinks = {
  github: string;
  linkedin: string;
  /** In-page anchor or absolute URL to a résumé PDF */
  resume: string;
};

export type SiteConfig = {
  name: string;
  /** Document title (browser tab) */
  title: string;
  /** One-line hook under your name in the hero */
  tagline: string;
  /** Short professional summary (hero + meta description) */
  description: string;
  /** Canonical site URL for metadata and absolute links */
  url: string;
  /** Shown in the contact section; override with NEXT_PUBLIC_CONTACT_EMAIL */
  email: string;
  links: SiteLinks;
};
