import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { getProductionProjects } from "../utils/projectsData";
import { Badge } from "../components/ui/badge";
import { CTA } from "../components/CTA";
import { parseCTA } from "../utils/parseMarkdown";
import { ctaContent } from "../content/data/cta";
import { ArrowLeft, Calendar, Users, DollarSign, Zap, Trophy } from "lucide-react";

export function ProductionProjectsPage() {
  // Get production projects using the new build type system
  const productionProjects = getProductionProjects();
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
              Production Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Award-winning projects built for competition and production. These projects represent 
              our highest standards of innovation, sustainability, and technical excellence.
            </p>
          </div>
        </div>

        {/* stats + featured project
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{productionProjects.length}</div>
            <div className="text-muted-foreground">Production Projects</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {productionProjects.filter(p => p.status === "NAHB Winner").length}
            </div>
            <div className="text-muted-foreground">NAHB Winners</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {productionProjects.filter(p => p.status === "NAHB Finalist").length}
            </div>
            <div className="text-muted-foreground">NAHB Finalists</div>
          </div>
          <div className="bg-card border-2 border-accent rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              ${productionProjects.reduce((sum, project) => {
                const cost = parseInt(project.specifications?.["Build Cost"]?.replace(/[$,]/g, '') || '0');
                return sum + cost;
              }, 0).toLocaleString()}
            </div>
            <div className="text-muted-foreground">Total Investment</div>
          </div>
        </div>

        {productionProjects.find(p => p.status === "NAHB Winner") && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-accent" />
                <h2 className="text-2xl font-bold text-accent">Featured Winner</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-3">
                    {productionProjects.find(p => p.status === "NAHB Winner")?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {productionProjects.find(p => p.status === "NAHB Winner")?.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-accent text-accent-foreground">
                      NAHB Winner {productionProjects.find(p => p.status === "NAHB Winner")?.year}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {productionProjects.find(p => p.status === "NAHB Winner")?.specifications?.["Team Size"]}
                    </span>
                  </div>
                  <Link to={`/projects/${productionProjects.find(p => p.status === "NAHB Winner")?.id}`}>
                    <Button variant="primary">
                      View Winner Details
                    </Button>
                  </Link>
                </div>
                <div className="aspect-video bg-primary-foreground rounded-lg overflow-hidden">
                  {productionProjects.find(p => p.status === "NAHB Winner")?.imageUrl ? (
                    <img 
                      src={productionProjects.find(p => p.status === "NAHB Winner")?.imageUrl} 
                      alt={productionProjects.find(p => p.status === "NAHB Winner")?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary">
                      {productionProjects.find(p => p.status === "NAHB Winner")?.title}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionProjects.map((project, index) => (
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
                    <Badge variant="outline" className="border-accent text-accent px-3 py-1 text-sm">
                      Production
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
        {productionProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-accent mb-2">No Production Projects Yet</h3>
            <p className="text-muted-foreground mb-6">
              We're preparing for upcoming competitions. Check back soon for our latest production projects!
            </p>
            <Link to="/competition">
              <Button variant="primary">
                View Competition Info
              </Button>
            </Link>
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
