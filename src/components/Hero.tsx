import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export function Hero({ title, description, imageUrl }: HeroProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl leading-tight">
              {title}
            </h1>
            <p className="text-xl leading-relaxed text-white">
              {description}
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button 
                  variant="primary">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="secondaryOutline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent to-transparent rounded-xl blur-xl opacity-10"></div>
            <div className="aspect-video rounded-xl bg-primary-foreground overflow-hidden relative border-2 border-accent">
              {imageUrl ? (
                <ImageWithFallback 
                  src={imageUrl}
                  alt="Housing Project Visualization"
                  className="w-full h-full object-cover"
                />
              ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary">
                  Housing Project Visualization
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}