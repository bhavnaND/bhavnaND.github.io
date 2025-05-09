
import React from 'react';
import { Briefcase, Code, FileText } from 'lucide-react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Express', 'MongoDB', 'SQL', 'HTML/CSS',
  'Tailwind CSS', 'Next.js', 'Git', 'RESTful APIs',
  'GraphQL', 'AWS', 'Docker', 'CI/CD'
];

const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Full Stack Engineer from India with expertise in building 
              modern web applications. With a strong foundation in both frontend and backend 
              technologies, I enjoy creating robust, scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg">
              My approach combines clean code principles with user-centered design thinking. 
              I'm constantly learning new technologies and methodologies to enhance my skills 
              and deliver better results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>15+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>B.Tech in Computer Science</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-background px-3 py-1 rounded-full text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
