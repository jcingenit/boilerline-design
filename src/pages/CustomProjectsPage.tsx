import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { getCustomProjects } from "../utils/projectsData";
import { Badge } from "../components/ui/badge";
import { CTA } from "../components/CTA";
import { parseCTA } from "../utils/parseMarkdown";
import { ctaContent } from "../content/data/cta";
import { ArrowLeft, Calendar, Users, DollarSign, Zap } from "lucide-react";

export function CustomProjectsPage() {
  // Get custom projects using the new build type system
  const customProjects = getCustomProjects();
  const ctaData = parseCTA(ctaContent);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Custom Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative, one-of-a-kind projects tailored to specific needs and challenges. 
              These custom solutions showcase our team's creativity and technical expertise.
            </p>
          </div>
        </div>

        {/* Stats + featured project
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{customProjects.length}</div>
            <div className="text-muted-foreground">Custom Projects</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {customProjects.reduce((sum, project) => {
                const teamSize = parseInt(project.specifications?.["Team Size"]?.replace(/\D/g, '') || '0');
                return sum + teamSize;
              }, 0)}
            </div>
            <div className="text-muted-foreground">Total Team Members</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              ${customProjects.reduce((sum, project) => {
                const cost = parseInt(project.specifications?.["Build Cost"]?.replace(/[$,]/g, '') || '0');
                return sum + cost;
              }, 0).toLocaleString()}
            </div>
            <div className="text-muted-foreground">Total Investment</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {customProjects.filter(p => p.status === "Completed").length}
            </div>
            <div className="text-muted-foreground">Completed</div>
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((project, index) => (
            <div key={project.id} className="bg-card border-2 border-accent rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary-foreground overflow-hidden">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary">
                    {project.title}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent px-3 py-1 text-sm">
                    Custom
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-accent mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description || project.overview}
                </p>
                
                <Link to={`/projects/${project.id}`}>
                  <Button variant="primary" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {customProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-accent mb-2">No Custom Projects Yet</h3>
            <p className="text-muted-foreground mb-6">
              We're working on some exciting custom projects. Check back soon!
            </p>
          </div>
        )}

        {/* CTA Section */}
        <CTA
          title={ctaData.title}
          description={ctaData.description}
        />
      </div>
    </div>
  );
}
