import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { opensInNewTab } from "@/lib/href";
import { cn } from "@/lib/utils";

import type { Project, ProjectLink } from "@/types/project";

function StackChip({ children }: { children: ReactNode }) {
  return (
    <span className="border-border/60 text-muted-foreground rounded-md border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

function ProjectLinkButton({ label, href }: ProjectLink) {
  const className = cn(
    buttonVariants({ variant: "outline", size: "sm" }),
    "gap-1.5"
  );

  if (opensInNewTab(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
        <ExternalLink className="size-3.5 opacity-70" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={className} prefetch={false}>
      {label}
    </Link>
  );
}

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "border-border/60 bg-card/20 flex h-full flex-col overflow-hidden rounded-xl border",
        className
      )}
    >
      <div className="border-border/40 bg-muted/15 relative aspect-[16/10] border-b">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || `${project.title} preview`}
            fill
            className="object-contain object-center p-8 opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.28_0.06_264/0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,oklch(0.22_0.04_264/0.2),transparent_50%)]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <StackChip key={tech}>{tech}</StackChip>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <ProjectLinkButton key={`${link.label}-${link.href}`} {...link} />
          ))}
        </div>
      </div>
    </article>
  );
}
