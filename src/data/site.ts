import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Evan Ritzcovan",
  title: "Evan Ritzcovan",
  tagline: "Frontend systems, modern UX, and agentic AI workflows.",
  description:
    "Frontend engineer transitioning into agentic AI development, focused on building responsive interfaces, structured workflows, and practical AI-driven user experiences.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "your-email@example.com",
  links: {
    github: "https://github.com/evanritzcovan",
    linkedin: "https://www.linkedin.com/in/evanritzcovan",
    resume: "/resume.pdf",
  },
};
