import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface CTAProps {
  title: string;
  description: string;
}

export function CTA({ title, description }: CTAProps) {
  return (
    <section id="contact" className="bg-primary py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">

        <div className="mt-16 bg-primary rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-primary-foreground mb-6 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary">
                Join our team
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondaryOutline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}