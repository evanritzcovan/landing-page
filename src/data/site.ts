import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Evan Ritzcovan",
  title: "Evan Ritzcovan",
  tagline: "Frontend engineering, interfaces, and agentic AI systems.",
  description:
    "Frontend engineer and product-minded builder focused on polished interfaces and agentic AI systems.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  links: {
    github: "https://github.com/evanritzcovan",
    linkedin: "https://www.linkedin.com/in/evanritzcovan",
    resume: "/#resume",
  },
};
