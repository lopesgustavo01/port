import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MatrixRain from "../components/MatrixRain";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Matrix rain background */}
      <MatrixRain />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
