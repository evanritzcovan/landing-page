import type { FeaturedProject, Project } from "@/types/project";

export const featuredProject: FeaturedProject = {
  id: "ai-habit-tracker",
  title: "AI habit tracker",
  tagline: "Structured behavior change with AI-generated action plans.",
  description:
    "A mobile habit-building and habit-breaking application that generates structured, checklist-driven plans using OpenAI, helping users focus on daily execution through streaks, tracking, and a focused Today view.",
  problemSolved:
    "Most habit apps focus on tracking alone and leave users guessing how to actually change behavior. This project combines structured AI-generated plans with daily execution workflows to reduce friction between intention and action.",
  highlights: [
    "AI-generated habit plans with structured JSON schema validation and actionable checklist steps",
    "Plan versioning system with regeneration, difficulty adjustment, and rollback support",
    "Full-stack architecture using React Native, Supabase Auth/Edge Functions, and AI orchestration workflows",
  ],
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Supabase",
    "OpenAI API",
  ],
  githubUrl: "https://github.com/evanritzcovan/habit-agent",
  demoUrl: undefined,
  screenshots: [
    {
      src: "/habit-agent-1.png",
      alt: "AI habit tracker Today view",
    },
    {
      src: "/habit-agent-2.png",
      alt: "AI habit tracker plan checklist",
    },
    {
      src: "/habit-agent-3.png",
      alt: "AI habit tracker habit detail",
    },
  ],
};

export const projects: Project[] = [
  {
    id: "kanbas",
    title: "Kanbas",
    shortDescription:
      "A full-stack learning management system with role-based access, authentication, assignments, grading, and file submissions.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Render", "Netlify"],
    links: [
      {
        label: "Source",
        href: "https://github.com/evanritzcovan/kanbas-react-web-app/tree/a6",
      },
    ],
    imageSrc: "/kanbas.png",
    imageAlt: "Kanbas LMS platform",
  },
  {
    id: "foodfinder",
    title: "Foodfinder",
    shortDescription:
      "A full-stack restaurant discovery app using the Yelp API with authentication and user-specific bookmarking across shared profiles.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Render", "Netlify"],
    links: [
      {
        label: "Source",
        href: "https://github.com/evanritzcovan/foodfinder-react-web-app",
      },
    ],
    imageSrc: "/foodfinder.png",
    imageAlt: "Foodfinder restaurant discovery app",
  },
  {
    id: "landing-page",
    title: "Personal portfolio",
    shortDescription:
      "A component-driven portfolio site built with a structured layout system and optimized for fast, accessible rendering.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        label: "Source",
        href: "https://github.com/evanritzcovan/landing-page",
      },
    ],
    imageSrc: "/portfolio.png",
    imageAlt: "Personal portfolio",
  },
];

