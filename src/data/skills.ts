import type { TechCategory } from "@/types/skills";

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML & CSS",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Edge functions"],
  },
  {
    id: "ai",
    title: "AI / LLM",
    items: [
      "Prompt design",
      "Tool calling",
      "RAG patterns",
      "OpenAI API",
      "Evaluation & guardrails",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    items: ["Vercel", "Docker", "CI/CD", "Git"],
  },
  {
    id: "tooling",
    title: "Tooling",
    items: ["ESLint", "Prettier", "Storybook", "Figma"],
  },
];
