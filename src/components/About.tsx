import React from "react";
import { Lightbulb, Users, Award } from "lucide-react";

interface Value {
  title: string;
  description: string;
}

interface AboutProps {
  title: string;
  subtitle: string;
  values: Value[];
}

const icons = [Lightbulb, Users, Award];

export function About({ title, subtitle, values }: AboutProps) {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-foreground mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={`value-${index}-${value.title}`} 
                  className="border-2 border-accent rounded-xl p-8 bg-card hover:border-accent transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300 opacity-20">
                    <Icon className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl text-card-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}