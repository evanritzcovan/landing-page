import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function PageSection({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <SectionWrapper
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-border/40 border-t", className)}
    >
      <h2
        id={`${id}-heading`}
        className="text-foreground text-2xl font-semibold tracking-tight"
      >
        {title}
      </h2>
      {children ? <div className="mt-10">{children}</div> : null}
    </SectionWrapper>
  );
}

export default function Home() {
  return (
    <>
      <SectionWrapper
        id="hero"
        aria-labelledby="hero-heading"
        className="py-20 md:py-28"
        containerSize="narrow"
      >
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Portfolio
        </p>
        <h1
          id="hero-heading"
          className="text-foreground mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-lg text-base leading-relaxed text-pretty">
          {siteConfig.description}
        </p>
        <div className="mt-10">
          <a
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            GitHub
          </a>
        </div>
      </SectionWrapper>

      <PageSection id="projects" title="Projects" />
      <PageSection id="about" title="About" />
      <PageSection id="stack" title="Tech stack" />
      <PageSection id="resume" title="Resume" />
      <PageSection id="contact" title="Contact" />
    </>
  );
}
