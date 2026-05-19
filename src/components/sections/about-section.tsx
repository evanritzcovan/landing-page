"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { aboutContent } from "@/data/about";
import { sectionMotion } from "@/lib/section-motion";

export function AboutSection() {
  const reduced = useReducedMotion();
  const { container, item } = sectionMotion(reduced);

  return (
    <SectionWrapper
      id="about"
      aria-labelledby="about-heading"
      className="border-border/40 border-t"
    >
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-72px" }}
        variants={container}
      >
        <motion.p
          variants={item}
          className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase"
        >
          {aboutContent.eyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          id="about-heading"
          className="text-foreground mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {aboutContent.title}
        </motion.h2>
        <motion.p
          variants={item}
          className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty sm:text-lg"
        >
          {aboutContent.intro}
        </motion.p>

        <div className="mt-12 flex flex-col gap-6 sm:gap-8">
          {aboutContent.blocks.map((block) => (
            <motion.div
              key={block.title}
              variants={item}
              className="border-border/50 bg-card/15 hover:border-border hover:bg-card/25 rounded-xl border border-l-2 border-l-primary/35 p-5 transition-[border-color,background-color] motion-reduce:transition-none sm:p-6"
            >
              <h3 className="text-foreground text-lg font-semibold tracking-tight">
                {block.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
