'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div data-aos="fade-up" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:harshadamali2003@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  harshadamali2003@gmail.com
                </a>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-secondary transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+919322393913"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  +91 9322393913
                </a>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <h3 className="font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/HarshadaMali15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshada-mali-5396b9233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:harshadamali2003@gmail.com"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
