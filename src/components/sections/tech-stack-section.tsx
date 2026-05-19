"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { TechBadge } from "@/components/shared/tech-badge";
import { techCategories } from "@/data/skills";
import { sectionMotion } from "@/lib/section-motion";

export function TechStackSection() {
  const reduced = useReducedMotion();
  const { container, item } = sectionMotion(reduced);

  return (
    <SectionWrapper
      id="stack"
      aria-labelledby="stack-heading"
      className="border-border/40 border-t"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-72px" }}
        variants={container}
      >
        <motion.p
          variants={item}
          className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase"
        >
          Stack
        </motion.p>
        <motion.h2
          variants={item}
          id="stack-heading"
          className="text-foreground mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.p
          variants={item}
          className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
        >
          Frontend and full-stack JavaScript development with experience in API
          integration and emerging LLM-based application features.
        </motion.p>

        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2">
          {techCategories.map((category) => (
            <motion.section
              key={category.id}
              variants={item}
              aria-labelledby={`stack-${category.id}`}
            >
              <h3
                id={`stack-${category.id}`}
                className="text-foreground text-sm font-semibold tracking-wide uppercase"
              >
                {category.title}
              </h3>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {category.items.map((name) => (
                  <li key={name}>
                    <TechBadge variant="soft" size="md">
                      {name}
                    </TechBadge>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
