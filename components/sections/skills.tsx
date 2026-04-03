'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML & CSS', level: 92 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'Database Design', level: 78 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Problem Solving', level: 87 },
        { name: 'Code Quality', level: 86 },
        { name: 'Testing', level: 75 },
        { name: 'Deployment', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${categoryIndex * 100 + skillIndex * 50}ms forwards`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Highlights */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold mb-6">Tech Stack Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'MongoDB', 'Tailwind'].map(
              (tech, index) => (
                <div
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="bg-card border border-border rounded-lg p-4 text-center font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
