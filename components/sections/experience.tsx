'use client';

import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Experience() {
  const [certificateOpen, setCertificateOpen] = useState(false);

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Blue Planet Info Solutions Pvt Ltd Pune',
      location: 'Pune, Maharashtra',
      duration: '8 Months',
      startDate: '23 July 2025',
      description: [
        'Developed and maintained full-stack web applications using React and Next.js',
        'Developed role-based dashboards using Next.js and MySQL',
        'Optimized MySQL database queries to improve performance.',
        'Collaborated with backend and DevOps teams using Bitbucket and Jira.',
        'Improved application performance through code optimization and testing',
        'Worked on SmartCookie Next.js platform for assignment tracking',
        'Participated in code reviews and contributed to best practices documentation',
      ],
      skills: ['React', 'Next.js', 'MySQL', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Bitbucket' ],
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Experience Content */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                    <p className="text-lg font-semibold">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm font-semibold text-primary w-fit">
                      July 2025 to March 2026
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 space-y-2">
                  {exp.description.map((point, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                      data-aos="fade-right"
                      data-aos-delay={index * 100 + i * 50}
                    >
                      <span className="text-primary mt-1">›</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={skill}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100 + i * 40}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-16">
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300">
            <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border-b border-border p-6">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">Internship Certificate</h3>
              </div>
              <p className="text-muted-foreground">
                Successfully completed 8 months of full-stack development internship
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Company</p>
                    <p className="font-semibold">Blue Planet Info Solutions Pvt Ltd Pune</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-semibold">8 Months</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold">Pune, Maharashtra</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold text-accent">Completed</p>
                  </div>
                </div>

                {/* Certificate Preview */}
                <div className="mt-6 border border-border rounded-lg overflow-hidden bg-muted/30 p-4">
                  <button
  onClick={() => setCertificateOpen(!certificateOpen)}
  className="w-full rounded-lg overflow-hidden"
>
  <img
    src="/BPSI100462.jpg"
    alt="Certificate"
    className="w-full h-auto rounded-lg"
  />
</button>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
  href="https://drive.google.com/file/d/1cA5vA9oCV6fbEtFESr6Fbe_3qcTOdos9/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 px-6 py-2 bg-accent/10 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center gap-2"
>
  <ExternalLink className="w-4 h-4" />
  View Certificate
</a>
                  <a
  href="/BPSI100462.pdf"
  download
  className="flex-1 px-6 py-2 bg-primary/10 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors duration-300 text-center"
>
  Download
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
