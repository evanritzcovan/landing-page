export type ProjectLink = {
  label: string;
  href: string;
};

export type FeaturedScreenshot = {
  src: string;
  alt: string;
};

/** Compact card used in the “more projects” grid */
export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  stack: string[];
  links: ProjectLink[];
  /** Path under `public/` or remote URL */
  imageSrc?: string;
  imageAlt?: string;
};

/** Hero row for the primary case study */
export type FeaturedProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  /** Mobile or UI screenshots (preferred for featured mobile apps) */
  screenshots?: FeaturedScreenshot[];
  /** Single wide preview; used when `screenshots` is empty */
  imageSrc?: string;
  imageAlt?: string;
};
