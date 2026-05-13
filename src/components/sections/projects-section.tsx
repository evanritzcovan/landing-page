import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProject, projects } from "@/data/projects";

import { FeaturedProjectShowcase } from "./featured-project";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" aria-labelledby="projects-heading">
      <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
        Work
      </p>
      <h2
        id="projects-heading"
        className="text-foreground mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        Projects
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
        A mix of product surfaces, systems work, and experiments at the
        intersection of UI engineering and agentic tooling—built for clarity,
        speed, and maintainability.
      </p>

      <div className="mt-14 sm:mt-16">
        <FeaturedProjectShowcase project={featuredProject} />
      </div>

      <div className="mt-20 md:mt-28">
        <h3 className="text-foreground text-xl font-semibold tracking-tight">
          More projects
        </h3>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
          Smaller builds and libraries that round out the engineering story.
        </p>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
