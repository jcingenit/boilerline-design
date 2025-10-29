import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HouseDesign {
  name: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  description: string;
  imageUrl?: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
}

interface HouseCarouselProps {
  homeDesigns: HouseDesign[];
}

export function HouseCarousel({ homeDesigns }: HouseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate how many slides we need (showing 2 at a time)
  const totalSlides = Math.ceil(homeDesigns.length / 2);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Get the current pair of houses to display
  const getCurrentHouses = () => {
    const startIndex = currentIndex * 2;
    return homeDesigns.slice(startIndex, startIndex + 2);
  };
  
  const currentHouses = getCurrentHouses();
  
  return (
    <div className="w-full">
      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button
          variant="outline"
          size="icon"
          className="bg-primary hover:bg-white border-2 border-accent shadow-lg"
          onClick={goToPrevious}
          disabled={totalSlides <= 1}
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </Button>
        
        <div className="flex-1 max-w-4xl">
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const housesInSlide = homeDesigns.slice(slideIndex * 2, slideIndex * 2 + 2);
                
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                      {housesInSlide.map((house, houseIndex) => (
                        <HouseCard key={`${slideIndex}-${houseIndex}`} house={house} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="bg-primary hover:bg-white border-2 border-accent shadow-lg"
          onClick={goToNext}
          disabled={totalSlides <= 1}
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </Button>
      </div>
      
      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-accent' 
                  : 'bg-foreground/30'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HouseCard({ house }: { house: HouseDesign }) {
  return (
    <div className="bg-card border-2 border-accent rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* House Image */}
      <div className="aspect-[4/3] bg-muted overflow-hidden">
        {house.imageUrl ? (
          <ImageWithFallback
            src={house.imageUrl}
            alt={house.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <p className="text-sm">{house.name}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* House Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-accent mb-2">{house.name}</h3>
        <p className="text-sm text-foreground mb-4">{house.type}</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{house.bedrooms}</div>
            <div className="text-xs text-foreground">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{house.bathrooms}</div>
            <div className="text-xs text-foreground">Bathrooms</div>
          </div>
          <div className="text-center col-span-2">
            <div className="text-lg font-semibold text-foreground">{house.sqft}</div>
            <div className="text-xs text-foreground">Square Feet</div>
          </div>
        </div>
        
        {/* Additional Stats if available */}
        {house.stats && house.stats.length > 0 && (
          <div className="border-t border-muted py-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              {house.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-foreground">{stat.value}</div>
                  <div className="text-xs text-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Description */}
        {house.description && (
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {house.description}
          </p>
        )}
      </div>
    </div>
  );
}
