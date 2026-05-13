"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code, FileText, UserRound } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { getHeroCtas, heroEyebrow, type HeroCtaIcon } from "@/data/hero";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function CtaIcon({ name }: { name: HeroCtaIcon }) {
  const common = "size-4 shrink-0 opacity-80";
  switch (name) {
    case "github":
      return <Code className={common} aria-hidden />;
    case "linkedin":
      return <UserRound className={common} aria-hidden />;
    case "file":
      return <FileText className={common} aria-hidden />;
    default:
      return <ArrowRight className={common} aria-hidden />;
  }
}

const sectionScroll = "scroll-mt-[calc(var(--header-height)+0.75rem)]" as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ctas = getHeroCtas(siteConfig.links);

  const transition = {
    duration: reduceMotion ? 0 : 0.45,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition,
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: reduceMotion ? 0 : 0.04,
      },
    },
  };

  const ctaClass = (variant: "default" | "outline") =>
    cn(
      buttonVariants({ variant, size: "default" }),
      "w-full justify-center gap-2 sm:w-auto"
    );

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn(
        sectionScroll,
        "border-border/40 relative overflow-hidden border-b py-24 md:py-32 lg:py-40"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
      >
        <div className="absolute inset-x-0 top-0 h-[min(55vh,28rem)] -translate-y-1/3 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,oklch(0.38_0.08_264/0.35),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_100%,oklch(0.22_0.04_264/0.12),transparent_55%)]" />
      </div>

      <Container size="narrow" className="relative">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase"
          >
            {heroEyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-foreground mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-4 text-lg leading-snug text-pretty sm:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {ctas.map((cta) => {
              const content = (
                <>
                  <CtaIcon name={cta.icon} />
                  {cta.label}
                </>
              );

              if (cta.external) {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClass(cta.variant)}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={ctaClass(cta.variant)}
                  prefetch={false}
                >
                  {content}
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
