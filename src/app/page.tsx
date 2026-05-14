import type { ReactNode } from "react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
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
      <HeroSection />

      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <PageSection id="contact" title="Contact" />
    </>
  );
}
