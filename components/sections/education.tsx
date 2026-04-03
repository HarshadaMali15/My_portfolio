'use client';

import { BookOpen, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      id: 1,
      level: 'SSC (Secondary School Certificate)',
      year: '2018-2019',
      percentage: '80.80%',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      level: 'HSC (Higher Secondary Certificate)',
      year: '2019-2021',
      percentage: '85.5%',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      level: 'Bachelor of Computer Applications (BCA)',
      year: 'Graduated 2024',
      percentage: '8.22 CGPA',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      level: 'Master of Computer Applications (MCA)',
      year: 'Graduated 2026',
      percentage: 'Pursuing',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Qualifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={edu.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <div className={`p-4 rounded-lg bg-gradient-to-br ${edu.color} flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {edu.level}
                        </h3>
                        <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold whitespace-nowrap">
                          {edu.percentage}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-base md:text-lg">
                        {edu.year}
                      </p>
                    </div>

                    {/* Connector Line (for desktop) */}
                    {index < education.length - 1 && (
                      <div className="hidden md:block absolute left-12 top-20 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
                    )}
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
          <p className="text-muted-foreground text-lg">
            Pursuing MCA while developing professional skills through real-world projects and industry experience
          </p>
        </div>
      </div>
    </section>
  );
}
