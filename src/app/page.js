import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ProjectsGrid from "@/components/ProjectsGrid";
import ArchitectureCaseStudies from "@/components/ArchitectureCaseStudies";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationList from "@/components/EducationList";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <InteractiveTerminal />
      <ProjectsGrid />
      <ArchitectureCaseStudies />
      <ExperienceTimeline />
      <EducationList />
      <ContactFooter />
    </main>
  );
}
