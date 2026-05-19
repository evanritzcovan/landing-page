"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, Mail, UserRound } from "lucide-react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ContactChannelCard } from "@/components/shared/contact-channel-card";
import { contactContent } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { sectionMotion } from "@/lib/section-motion";

export function ContactSection() {
  const reduced = useReducedMotion();
  const { container, item } = sectionMotion(reduced);
  const mailto = `mailto:${siteConfig.email}`;

  const channels = [
    {
      href: mailto,
      label: "Email",
      description: "Direct contact for opportunities, projects, or general questions.",
      icon: Mail,
    },
    {
      href: siteConfig.links.github,
      label: "GitHub",
      description: "Personal projects, experiments, and application code.",
      icon: Code,
    },
    {
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
      description: "Work history, experience, and professional updates.",
      icon: UserRound,
    },
  ] as const;

  return (
    <SectionWrapper
      id="contact"
      aria-labelledby="contact-heading"
      className="border-border/40 border-t"
    >
      <motion.div
        className="max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-72px" }}
        variants={container}
      >
        <motion.p
          variants={item}
          className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase"
        >
          {contactContent.eyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          id="contact-heading"
          className="text-foreground mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {contactContent.title}
        </motion.h2>
        <motion.p
          variants={item}
          className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
        >
          {contactContent.intro}
        </motion.p>

        <motion.ul
          variants={item}
          className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {channels.map((ch) => (
            <li key={ch.label} className="min-h-[140px]">
              <ContactChannelCard
                href={ch.href}
                label={ch.label}
                description={ch.description}
                icon={ch.icon}
              />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionWrapper>
  );
}
