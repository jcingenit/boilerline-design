import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Users, Award, ArrowRight, Star } from "lucide-react";

interface FeaturedProjectProps {
  title: string;
  description: string;
  year: string;
  status: string;
  imageUrl?: string;
  highlights?: string[];
  badgeText?: string;
  projectId?: string;
}

export function FeaturedProject({ 
  title, 
  description, 
  year, 
  status, 
  imageUrl,
  highlights = [],
  badgeText,
  projectId
}: FeaturedProjectProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto border-2 border-accent/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm">{badgeText || (year ? `Featured Project ${year}` : 'Featured Project')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-foreground font-medium">Year:</span>
                    <span className="text-muted-foreground">{year}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-foreground font-medium">Status:</span>
                    <span className="text-muted-foreground">{status}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Key Highlights</h3>
                  <ul className="space-y-2">
                    {(highlights.length ? highlights : [
                      'Revolutionary sustainable housing design',
                      '70% reduction in energy consumption',
                      'NAHB Student Competition entry',
                      'Innovative accessibility features'
                    ]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Image/Visualization */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center border border-accent/60 overflow-hidden">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-accent-foreground">
                      <div className="text-5xl mb-2">🏠</div>
                      <p className="text-sm">Project Visualization</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-10">
          <div className="flex flex-col sm:flex-row gap-4 py-4 justify-center items-center">
            {projectId ? (
              <>
                <Link to={`/projects/${projectId}`}>
                  <Button 
                    size="lg" 
                    variant="primary">
                    Explore Full Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button 
                    variant="secondaryOutline" 
                    size="lg">
                    View All Projects
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/projects">
                <Button 
                  size="lg" 
                  variant="primary">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

