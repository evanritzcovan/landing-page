"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProject, projects } from "@/data/projects";
import { sectionMotion } from "@/lib/section-motion";

import { FeaturedProjectShowcase } from "./featured-project";

const inView = { once: true, margin: "-72px" } as const;

export function ProjectsSection() {
  const reduced = useReducedMotion();
  const { container, item } = sectionMotion(reduced);

  return (
    <SectionWrapper id="projects" aria-labelledby="projects-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={container}
      >
        <motion.p
          variants={item}
          className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase"
        >
          Projects
        </motion.p>
        <motion.h2
          variants={item}
          id="projects-heading"
          className="text-foreground mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          Selected work
        </motion.h2>
        <motion.p
          variants={item}
          className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
        >
          A collection of full-stack and frontend systems including
          authenticated applications, API-driven products, interface design
          work, and applied LLM-based features.
        </motion.p>

        <motion.div variants={item} className="mt-[var(--section-gap)]">
          <FeaturedProjectShowcase project={featuredProject} />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-[var(--section-gap-lg)]"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={container}
      >
        <motion.h3
          variants={item}
          className="text-foreground text-xl font-semibold tracking-tight"
        >
          More projects
        </motion.h3>
        <motion.p
          variants={item}
          className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed"
        >
          Smaller systems, experiments, and completed builds beyond featured
          work.
        </motion.p>
        <motion.ul
          variants={container}
          className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.li key={project.id} variants={item} className="h-full">
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionWrapper>
  );
}
