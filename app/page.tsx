import ContactSection from "./components/contactSection";
import Awards from "./components/sections/awards";
import EducationSection from "./components/sections/educationSection";
import ExperienceSection from "./components/sections/experienceSection";
import ProjectsSection from "./components/sections/projectsSection";
import SkillsSection from "./components/sections/skillsSection";
import SummarySection from "./components/sections/summarySection";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-8">
      <ContactSection/>
      <SummarySection/>
      <SkillsSection/>
      <ExperienceSection/>
      <EducationSection/>
      <ProjectsSection/>
      <Awards/>
    </div>
  )
}
