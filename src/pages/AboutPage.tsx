import React from "react";
import { parseAbout, parseValues } from "../utils/parseMarkdown";
import { aboutContent } from "../content/data/about";
import { valuesContent } from "../content/data/values";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Target, Users, Lightbulb } from "lucide-react";

export function AboutPage() {
  const aboutData = parseAbout(aboutContent);
  const valuesData = parseValues(valuesContent);

  const icons = [Award, Target, Users, Lightbulb];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary from-muted/50 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-foreground mb-6">{aboutData.title}</h1>
            <p className="text-xl text-white">{aboutData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded at Purdue University, BoilerLine Design represents the culmination of innovative thinking and practical engineering excellence. Our team brings together students from diverse engineering disciplines, united by a common goal: to revolutionize affordable housing through sustainable design.
                  </p>
                  <p>
                    Since our inception, we've competed in the prestigious NAHB Student Competition, earning recognition for our innovative approaches to modern housing challenges. Our projects blend cutting-edge technology with practical solutions that address real-world needs.
                  </p>
                  <p>
                    We believe that exceptional housing should be accessible to everyone. Through modular design, sustainable materials, and smart technology integration, we're creating homes that are not just shelter, but platforms for improved quality of life.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-accent">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl max-w-xs">
                  <p className="text-sm">
                    "Building tomorrow's homes with today's innovation"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              {valuesData.map((value, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div 
                    key={`value-${index}-${value.title}`} 
                    className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent"
                  >
                    <div className="bg-accent rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl text-card-foreground mb-3">{value.title}</h3>
                    <p className="text-base text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}