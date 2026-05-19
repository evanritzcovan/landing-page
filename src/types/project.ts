export type ProjectLink = {
  label: string;
  href: string;
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
  imageSrc?: string;
  imageAlt?: string;
};
