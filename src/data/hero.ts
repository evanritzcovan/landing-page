import type { SiteConfig } from "@/types/site";

export const heroEyebrow = "Portfolio";

export type HeroCtaIcon = "arrow" | "github" | "linkedin" | "file";

export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  variant: "default" | "outline";
  icon: HeroCtaIcon;
};

export function getHeroCtas(links: SiteConfig["links"]): HeroCta[] {
  return [
    {
      label: "View projects",
      href: "/#projects",
      external: false,
      variant: "default",
      icon: "arrow",
    },
    {
      label: "GitHub",
      href: links.github,
      external: true,
      variant: "outline",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: links.linkedin,
      external: true,
      variant: "outline",
      icon: "linkedin",
    },
    {
      label: "Resume",
      href: links.resume,
      external: links.resume.startsWith("http"),
      variant: "outline",
      icon: "file",
    },
  ];
}
