import { motion } from "framer-motion";
import Achievements from "@/components/Achievements";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="section-glass">
          <AboutSection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Achievements Section  */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-glass">
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </motion.main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with React, Three.js, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;