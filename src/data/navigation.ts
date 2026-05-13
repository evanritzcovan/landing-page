export type NavItem = {
  label: string;
  /** Same-page section links */
  href: string;
};

export const mainNavItems: NavItem[] = [
  { label: "Work", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];
