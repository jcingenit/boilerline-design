import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/50 to-accent/10 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="bg-accent rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 border-4 border-card shadow-2xl">
            <span className="text-6xl text-accent-foreground">404</span>
          </div>
          <h1 className="text-5xl text-foreground mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-accent text-foreground px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 p-6 bg-card rounded-xl border-2 border-accent/20">
          <h3 className="text-lg text-card-foreground mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Projects
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/competition" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Competition
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}