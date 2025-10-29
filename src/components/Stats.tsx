import React from "react";
import { Card, CardContent } from "./ui/card";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section 
      id="stats" 
      className="py-16 border-t-2 border-accent bg-gradient-to-b from-background to-background"
      aria-label="Statistics"
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-7xl mx-auto bg-card border-accent/20 shadow-lg">
          <CardContent className="p-8">
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              role="list"
              aria-label="Statistics list"
            >
              {stats.map((stat, index) => (
                <div 
                  key={`stat-${index}-${stat.value}`} 
                  className="text-center group focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-2 rounded-lg p-4"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  <div 
                    className="text-4xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300 font-bold"
                    aria-hidden="true"
                  >
                    {stat.value}
                  </div>
                  <div className="text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                  <div 
                    className="w-12 h-1 bg-accent mx-auto mt-3 group-hover:w-20 transition-all duration-300 rounded-full"
                    aria-hidden="true"
                  ></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}