import React from "react";
import { Link } from "react-router-dom";
import { Home, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                <div className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center border-2 border-accent">
                  <Home className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg text-foreground">
                  BoilerLine Design
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Building innovative housing solutions for tomorrow's challenges.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-foreground mb-4">Competition</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/competition" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    NAHB Competition
                  </Link>
                </li>
                <li>
                  <a href="https://www.nahb.org/why-nahb/types-of-membership/student-chapter-membership/student-competition/nahb-student-competition-four-year-programs-custom" target="_blank" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    NAHB Site
                  </a>
                </li>
                <li>
                  <a href="https://www.nahb.org/why-nahb/types-of-membership/student-chapter-membership/student-competition/nahb-student-competition-four-year-programs-custom" target="_blank" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Competition Guidelines
                  </a>
                </li>
                <li>
                  <a href="/contact" target="_blank" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Join Our Team
                  </a>
                </li>
              </ul>
            </div>
            
            {/*<div>
              <h4 className="text-sm text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                  <button 
                    key={index}
                    className="bg-accent/10 rounded-lg w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-foreground group-hover:text-accent-foreground transition-colors" />
                  </button>
                ))}
              </div>
            </div>
            */}
          </div>
          
          <div className="border-t border-accent/20 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 BoilerLine Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}