'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import { ThemeToggle } from '@/components/theme-toggle';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Navigation from '@/components/navigation';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation Header */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Education Section */}
      <Education />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Full Stack Developer. Built with Next.js, Tailwind CSS & TypeScript.
        </p>
      </footer>
    </main>
  );
}
