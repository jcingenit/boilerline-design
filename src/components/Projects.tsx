import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  status: string;
  year?: string;
  imageUrl: string;
  buildType?: 'custom' | 'production';
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-foreground mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our award-winning housing projects and innovative designs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const slug = getProjectSlug(project.title);
              return (
                <Link 
                  key={`project-${index}-${project.title}`}
                  to={`/projects/${slug}`}
                  className="bg-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-accent hover:border-accent"
                >
                  <div className="aspect-video bg-card-foreground overflow-hidden relative">
                    <ImageWithFallback 
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-accent text-accent-foreground px-3 py-1 text-sm">
                        {project.status}
                      </Badge>
                      {project.buildType && (
                        <Badge 
                          variant={project.buildType === 'production' ? 'default' : 'secondary'}
                          className={project.buildType === 'production' 
                            ? 'bg-primary text-primary-foreground px-3 py-1 text-sm' 
                            : 'bg-accent/10 text-accent border-accent px-3 py-1 text-sm'
                          }
                        >
                          {project.buildType === 'production' ? 'Production' : 'Custom'}
                        </Badge>
                      )}
                    </div>
                    {project.year && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl text-foreground">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                    </div>
                    <p className="text-base text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {projects.length > 4 && (
            <div className="text-center mt-12">
              <Link to="/projects">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  View All Projects
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}