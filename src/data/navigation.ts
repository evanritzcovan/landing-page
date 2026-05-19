import { siteConfig } from "@/data/site";

export type NavItem = {
  label: string;
  /** In-page hash, app route, or absolute URL */
  href: string;
};

export const mainNavItems: NavItem[] = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Resume", href: siteConfig.links.resume },
  { label: "Contact", href: "/#contact" },
];
