import type { FeaturedProject, Project } from "@/types/project";

export const featuredProject: FeaturedProject = {
  id: "agentic-dev-workbench",
  title: "Agentic dev workbench",
  tagline: "From intent to pull requests with guardrails.",
  description:
    "A local-first developer cockpit that pairs structured plans with autonomous coding agents, keeping humans in the loop for review, tests, and release.",
  problemSolved:
    "Ad-hoc ChatGPT sessions lose context, skip verification steps, and are risky on production codebases. Teams need repeatable agent workflows without sacrificing engineering standards.",
  highlights: [
    "Task graph with explicit dependencies and rollback points",
    "Policy layer for file scope, commands, and secret redaction",
    "Tight integration with git worktrees and CI status",
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "OpenAI API"],
  githubUrl: "https://github.com/evanritzcovan",
  demoUrl: undefined,
};

export const projects: Project[] = [
  {
    id: "landing-page",
    title: "Personal portfolio",
    shortDescription:
      "A fast, accessible marketing surface with typed static content and a layout system built for iteration.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        label: "Source",
        href: "https://github.com/evanritzcovan/landing-page",
      },
    ],
    imageSrc: "/window.svg",
    imageAlt: "Decorative browser window graphic",
  },
  {
    id: "design-system-kit",
    title: "UI kit extensions",
    shortDescription:
      "Composable primitives on top of shadcn-style tokens—buttons, forms, and density modes tuned for data-heavy dashboards.",
    stack: ["React", "Tailwind CSS", "Radix", "Storybook"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/evanritzcovan",
      },
    ],
  },
  {
    id: "workflow-runner",
    title: "Workflow runner",
    shortDescription:
      "Typed job definitions, retries, and structured logs for long-running automations triggered from CI or Slack.",
    stack: ["TypeScript", "PostgreSQL", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/evanritzcovan",
      },
    ],
    imageSrc: "/globe.svg",
    imageAlt: "Decorative globe graphic",
  },
];
