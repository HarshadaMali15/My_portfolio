'use client';

import { MapPin, Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn more about my journey and background
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-2xl font-bold">Full Stack Developer Intern</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with 8 months of professional experience at Blue Planet Info Solutions Pvt Ltd, Pune. I specialize in building scalable, efficient, and user-friendly web applications using modern technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My journey in web development has been driven by a passion for creating elegant solutions to complex problems. I enjoy working on both frontend and backend technologies, ensuring seamless integration and optimal performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I love exploring new technologies, contributing to open-source projects, and continuously improving my skills through learning and experimentation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>harshadamali2003@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 9322393913</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Timeline */}
          <div data-aos="fade-left" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors duration-300" data-aos="zoom-in">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  8+
                </div>
                <p className="text-muted-foreground mt-2">Months Experience</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-secondary transition-colors duration-300" data-aos="zoom-in" data-aos-delay="100">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  2+
                </div>
                <p className="text-muted-foreground mt-2">Projects</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300" data-aos="zoom-in" data-aos-delay="200">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  5+
                </div>
                <p className="text-muted-foreground mt-2">Tech Skills</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors duration-300" data-aos="zoom-in" data-aos-delay="300">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-muted-foreground mt-2">Commitment</p>
              </div>
            </div>

            {/* Experience Highlight */}
            <div
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg mb-2">Current Focus</h4>
              <p className="text-muted-foreground">
                Specializing in React, Next.js, and full-stack development with modern backend technologies and databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
