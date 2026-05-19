"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  ExpandableImageTrigger,
  useImageLightbox,
} from "@/components/shared/image-lightbox";
import { TechBadge } from "@/components/shared/tech-badge";
import { buttonVariants } from "@/components/ui/button";
import { externalLinkLabel } from "@/lib/a11y";
import { opensInNewTab } from "@/lib/href";
import { cn } from "@/lib/utils";

import type { Project, ProjectLink } from "@/types/project";

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
        aria-label={externalLinkLabel(label)}
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

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const imageAlt = project.imageAlt || `${project.title} preview`;
  const images = project.imageSrc
    ? [{ src: project.imageSrc, alt: imageAlt }]
    : [];
  const { openAt, lightbox } = useImageLightbox(images);

  return (
    <article
      className={cn(
        "border-border/60 bg-card/20 hover:border-border hover:bg-card/30 flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-[border-color,background-color,box-shadow] motion-reduce:transition-none",
        className
      )}
    >
      {lightbox}
      <div className="border-border/40 bg-muted/15 relative aspect-[16/10] border-b">
        {project.imageSrc ? (
          <ExpandableImageTrigger
            images={images}
            imageIndex={0}
            onOpen={openAt}
            className="absolute inset-0"
          >
            <Image
              src={project.imageSrc}
              alt=""
              aria-hidden
              fill
              loading="lazy"
              className="object-contain object-center p-6 opacity-90 sm:p-8"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </ExpandableImageTrigger>
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
            <TechBadge key={tech}>{tech}</TechBadge>
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
