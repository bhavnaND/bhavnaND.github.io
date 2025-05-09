
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {year} Bhavna N. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:navadiyabhavnaben4@gmail.com"
              className="text-foreground/70 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/bhavna-n"
              className="text-foreground/70 hover:text-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/bhavna-n"
              className="text-foreground/70 hover:text-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
