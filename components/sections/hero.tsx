'use client';

import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Full Stack
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent block">
                  Developer
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
             I'm a passionate and dedicated MCA student with a strong interest in Full Stack Development.
             I enjoy creating user-friendly, responsive, and visually appealing websites using technologies like Next.js, React.js, JavaScript, Node.js, MySQL, MongoDB.
             I’m always eager to learn new tools and contribute to meaningful digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/Harshada_Mali_NextJs_Full_Stack_Developer_Intern.pdf"
                target="_blank"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            {/* Contact Info Badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="https://github.com/HarshadaMali15"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harshada-mali-5396b9233"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div data-aos="fade-left" className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-2xl blur-2xl"></div>
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center overflow-hidden">
              {/* Animated Code Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="text-xs text-muted-foreground font-mono whitespace-pre-wrap p-4 overflow-hidden">
                  {`const developer = {
                  name: "Full Stack Dev",
                  skills: ["React", "Next.js", "TypeScript"],
                  passion: "Building amazing apps",
                  available: true
                };

                async function buildApp() {
                  return "Elegant Solutions";
                }`}
                </div>
              </div>
              {/* Floating Elements */}
              <div
                className="w-20 h-20 bg-primary rounded-lg absolute top-10 right-10 opacity-40"
                data-aos="zoom-in"
              ></div>
              <div
                className="w-16 h-16 bg-secondary rounded-full absolute bottom-20 left-10 opacity-40"
                data-aos="zoom-in"
                data-aos-delay="200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
