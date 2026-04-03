'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SweetHome Startup',
      description:
        'Developed a sustainability-focused eCommerce platform designed to empower housewives to sell homemade products. Built using Next.js, Node.js, MongoDB, and Tailwind CSS, the application includes product listing, user authentication, and order management features. Implemented secure REST APIs and optimized UI for responsive design, achieving high performance and smooth user experience. ',
        
      image: '/sweethome.jpg',
      technologies: ['Next.js', 'Node.js','TypeScript', 'MongoDB', 'Tailwind CSS'],
      links: {
        live: 'https://gentle-gecko-4995b3.netlify.app/',
        github: 'https://github.com/HarshadaMali15/SweetHome-Startup.git',
         
      },
      features: ['Product Management', 'Seller Dashboard', 'User Dashboard', 'Admin Panel'],
    },
    {
      title: 'Insuracare',
      description:
        'Built a life insurance web application that allows users to explore policies and calculate premiums efficiently. Developed a fully functional admin panel for managing policies and user data. Focused on responsive UI design and performance optimization, resulting in faster load times and improved usability. Implemented backend validation and data handling using Node.js and MySQL to ensure secure and accurate operations.',
      image: '/insuracare.jpg',
      technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'MySQL'],
      links: {
        live: 'https://github.com/HarshadaMali15/InsuraCare.git',
        github: 'https://github.com/HarshadaMali15/InsuraCare.git',
      },
      features: ['Policy Listing & Management', 'Admin Dashboard', 'User Data Management', 'Premium Calculation System'],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my academic and professional projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              {/* Project Image/Visual */}
              <div className="h-48 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center text-white/50">
                  <div className="text-4xl font-bold">{index + 1}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={tech}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100 + i * 40}
                        className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 hover:border-secondary/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
     
      </div>
    </section>
  );
}
