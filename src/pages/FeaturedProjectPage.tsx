/** @jsxImportSource react */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Award, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
 

export function FeaturedProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-accent/80 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-transparent opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <Link to="/" className="flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to Home</span>
                </Link>
              </div>
              
              <div className="inline-block px-4 py-2 bg-accent-foreground/10 border-2 border-accent-foreground/30 rounded-full mb-6">
                <span className="text-sm text-accent-foreground">Featured Project 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-accent-foreground mb-6">
                Sustainable Housing Initiative
              </h1>
              
              <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
                Our flagship 2024 project focusing on innovative, eco-friendly housing solutions for the NAHB Student Competition. 
                Combining cutting-edge engineering with sustainable design principles.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-accent-foreground/80">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2 text-accent-foreground/80">
                  <Users className="w-4 h-4" />
                  <span>15 Team Members</span>
                </div>
                <div className="flex items-center gap-2 text-accent-foreground/80">
                  <Award className="w-4 h-4" />
                  <span>National Competition</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 transition-all duration-300"
              >
                View Project Details
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Project Overview
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    The Sustainable Housing Initiative represents our most ambitious project to date, 
                    combining innovative engineering solutions with sustainable design principles to 
                    create housing that's both environmentally responsible and economically viable.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    This project addresses critical challenges in modern housing, including energy efficiency, 
                    material sustainability, and accessibility, while maintaining affordability for diverse communities.
                  </p>
                </div>
                <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                  <div className="text-center text-accent-foreground">
                    <div className="text-6xl mb-4">🏠</div>
                    <p className="text-lg">Project Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Key Features & Innovations
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Revolutionary features that set this project apart from traditional housing solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-accent hover:border-accent transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Energy Efficiency
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced insulation and renewable energy integration for 70% reduction in energy consumption.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-accent hover:border-accent transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Sustainable Materials
                    </h3>
                    <p className="text-muted-foreground">
                      Recycled and locally sourced materials reducing environmental impact by 60%.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-accent hover:border-accent transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">♿</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Universal Design
                    </h3>
                    <p className="text-muted-foreground">
                      Accessibility-first design ensuring housing is inclusive for all community members.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Project Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Meet the dedicated students driving innovation in sustainable housing
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                  <Card key={member} className="border-2 border-accent hover:border-accent transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-accent-foreground">👤</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">Team Member {member}</h3>
                      <p className="text-sm text-muted-foreground">Engineering</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Project Timeline
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our journey through 2024
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { month: "January", title: "Project Planning", description: "Initial research and team formation" },
                  { month: "March", title: "Design Phase", description: "Architectural and engineering design development" },
                  { month: "June", title: "Prototype Development", description: "Building and testing initial prototypes" },
                  { month: "September", title: "Final Construction", description: "Complete project assembly and testing" },
                  { month: "November", title: "Competition", description: "NAHB Student Competition presentation" }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.month} - {milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-accent-foreground mb-6">
                Get Involved
              </h2>
              <p className="text-xl text-accent-foreground/90 mb-8">
                Interested in joining our mission to revolutionize sustainable housing? 
                We're always looking for passionate students to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 transition-all duration-300"
                  >
                    Join Our Team
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-all duration-300"
                  >
                    View All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

