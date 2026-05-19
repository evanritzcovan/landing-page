import Image from "next/image";
import type { ReactNode } from "react";
import { Code, ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { FeaturedScreenshotGallery } from "@/components/shared/featured-screenshot-gallery";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

import type { FeaturedProject } from "@/types/project";

export type FeaturedProjectShowcaseProps = {
  project: FeaturedProject;
};

const visualShellClass =
  "border-border/40 relative min-h-[280px] border-t lg:min-h-[380px] lg:border-t-0 lg:border-l";

const visualBackdropClass =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_40%,oklch(0.32_0.08_264/0.45),transparent_68%),linear-gradient(165deg,oklch(0.18_0.02_264/0.9),oklch(0.14_0.02_264/0.95))]";

function VisualShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(visualShellClass, className)}>{children}</div>;
}

function FeaturedProjectVisual({ project }: { project: FeaturedProject }) {
  const screenshots = project.screenshots ?? [];

  if (screenshots.length > 0) {
    return (
      <VisualShell>
        <FeaturedScreenshotGallery
          screenshots={screenshots}
          projectTitle={project.title}
          className="relative min-h-[280px] px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[380px] lg:px-8"
        />
      </VisualShell>
    );
  }

  if (project.imageSrc) {
    return (
      <VisualShell>
        <div className="relative aspect-video h-full min-h-[280px] w-full lg:aspect-auto lg:min-h-[380px]">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || `${project.title} interface preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </VisualShell>
    );
  }

  return (
    <VisualShell className="flex items-center justify-center">
      <div aria-hidden className={visualBackdropClass} />
      <div className="border-border/50 bg-background/10 relative mx-6 aspect-video w-full max-w-lg rounded-lg border shadow-sm backdrop-blur-sm sm:mx-10">
        <div className="border-border/40 flex items-center gap-1.5 border-b px-3 py-2">
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
          <span className="bg-muted-foreground/20 size-2 rounded-full" />
          <span className="bg-muted-foreground/15 size-2 rounded-full" />
        </div>
        <div className="text-muted-foreground/80 flex h-[calc(100%-2.25rem)] items-center justify-center px-4 text-center text-xs font-medium tracking-wide uppercase">
          Interface preview
        </div>
      </div>
    </VisualShell>
  );
}

export function FeaturedProjectShowcase({
  project,
}: FeaturedProjectShowcaseProps) {
  return (
    <article
      aria-labelledby={`${project.id}-featured-title`}
      className="border-border/60 bg-card/15 overflow-hidden rounded-2xl border"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
            Featured
          </p>
          <h3
            id={`${project.id}-featured-title`}
            className="text-foreground mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-2 text-base leading-relaxed sm:text-lg">
            {project.tagline}
          </p>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed sm:text-base">
            {project.description}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <h4 className="text-foreground text-xs font-semibold tracking-wide uppercase">
                Problem
              </h4>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                {project.problemSolved}
              </p>
            </div>
            <div>
              <h4 className="text-foreground text-xs font-semibold tracking-wide uppercase">
                Highlights
              </h4>
              <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed sm:text-base">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "gap-2"
              )}
            >
              <Code className="size-4 opacity-90" aria-hidden />
              View on GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "gap-2"
                )}
              >
                Live demo
                <ExternalLink className="size-4 opacity-80" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>

        <FeaturedProjectVisual project={project} />
      </div>
    </article>
  );
}
