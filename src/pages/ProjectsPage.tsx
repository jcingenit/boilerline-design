import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { allProjects, searchProjects } from "../utils/projectsData";
import { BuildTypeFilter, StatusFilter } from "../components/ProjectFilter";
import { CTA } from "../components/CTA";
import { parseCTA } from "../utils/parseMarkdown";
import { ctaContent } from "../content/data/cta";

export function ProjectsPage() {
  const [buildTypeFilter, setBuildTypeFilter] = useState<BuildTypeFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all projects using the same pattern as other pages
  const projects = allProjects;
  const ctaData = parseCTA(ctaContent);

  // Get unique statuses for filter options
  const availableStatuses = useMemo(() => {
    const statuses = Array.from(new Set(projects.map(p => p.status))).filter(Boolean);
    return statuses.sort();
  }, [projects]);

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply build type filter
    if (buildTypeFilter !== 'all') {
      filtered = filtered.filter(project => project.buildType === buildTypeFilter);
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    // Apply search query
    if (searchQuery.trim()) {
      filtered = searchProjects(searchQuery).filter(project => 
        filtered.includes(project)
      );
    }

    return filtered;
  }, [projects, buildTypeFilter, statusFilter, searchQuery]);

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
              All Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our complete portfolio of housing projects, from custom builds to award-winning production designs.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{projects.length}</div>
            <div className="text-muted-foreground">Total Projects</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {projects.filter(p => p.buildType === 'production').length}
            </div>
            <div className="text-muted-foreground">Production</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {projects.filter(p => p.buildType === 'custom').length}
            </div>
            <div className="text-muted-foreground">Custom</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {projects.filter(p => p.status.includes('Winner')).length}
            </div>
            <div className="text-muted-foreground">Award Winners</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  <div className="flex gap-2">
                    {project.status === "NAHB Winner" && (
                      <Badge className="bg-accent text-accent-foreground px-3 py-1 text-sm">
                        Winner
                      </Badge>
                    )}
                    {project.status === "NAHB Finalist" && (
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent px-3 py-1 text-sm">
                        Finalist
                      </Badge>
                    )}
                    <Badge 
                      variant={project.buildType === 'production' ? 'outline' : 'secondary'}
                      className={project.buildType === 'production'
                        ? 'border-accent text-accent px-3 py-1 text-sm'
                        : 'bg-accent/10 text-accent border-accent px-3 py-1 text-sm'
                      }
                    >
                      {project.buildType === 'production' ? 'Production' : 'Custom'}
                    </Badge>
                  </div>
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
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-accent mb-2">No Projects Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <Button 
              variant="primary"
              onClick={() => {
                setBuildTypeFilter('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <CTA
          title={ctaData.title}
          description={ctaData.description}
        />
      </div>
    </div>
  );
}

