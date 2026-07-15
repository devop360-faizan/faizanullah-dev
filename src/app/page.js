import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationList from "@/components/EducationList";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechStack />
      <ProjectsGrid />
      <ExperienceTimeline />
      <EducationList />
      <ContactFooter />
    </main>
  );
}
