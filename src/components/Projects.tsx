
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Healthcare Portal',
    description: 'A secure patient management system allowing doctors to schedule appointments and monitor patient health metrics.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-accent/50 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveUrl}
                    className="text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  
                  <a 
                    href={project.githubUrl}
                    className="text-foreground/70 hover:text-foreground flex items-center gap-1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View source code on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
