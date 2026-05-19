import type { TechCategory } from "@/types/skills";

export const techCategories: TechCategory[] = [
  {
    id: "web",
    title: "Web",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Redux",
      "AsyncStorage",
      "UI Architecture",
      "Authentication Flows",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "Supabase",
      "Express Session",
    ],
  },
  {
    id: "ai",
    title: "AI / LLM",
    items: [
      "OpenAI API",
      "Function calling",
      "Structured output",
      "Prompt design",
      "RAG patterns",
      "Vector databases",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "HTML", "CSS"],
  },
  {
    id: "infra",
    title: "Infrastructure",
    items: ["Vercel", "Netlify", "Render", "Git"],
  },
];
