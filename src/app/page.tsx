import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
}
