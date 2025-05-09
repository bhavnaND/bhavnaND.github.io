
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.2)_0%,rgba(255,255,255,0)_100%)]" />
      
      <div className="section-container flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground/80 mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Bhavna N</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Engineer
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            I build responsive, user-friendly web applications with modern technologies.
            Transforming ideas into elegant digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-foreground/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
