import type { SiteConfig } from "@/types/site";

export const heroEyebrow = "Portfolio";

export type HeroCtaIcon = "arrow" | "github" | "linkedin" | "file";

export type HeroCta = {
  label: string;
  href: string;
  variant: "default" | "outline";
  icon: HeroCtaIcon;
};

export function getHeroCtas(links: SiteConfig["links"]): HeroCta[] {
  return [
    {
      label: "View projects",
      href: "/#projects",
      variant: "default",
      icon: "arrow",
    },
    {
      label: "GitHub",
      href: links.github,
      variant: "outline",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: links.linkedin,
      variant: "outline",
      icon: "linkedin",
    },
    {
      label: "Resume",
      href: links.resume,
      variant: "outline",
      icon: "file",
    },
  ];
}
