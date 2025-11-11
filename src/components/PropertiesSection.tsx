import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { CarouselControls } from "@/components/CarouselControls";
import { Button } from "@/components/ui/button";
import type { PropertyCardProps } from "@/types";

interface PropertiesSectionProps {
  properties: PropertyCardProps[];
}

export function PropertiesSection({ properties }: PropertiesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleProperties = properties.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="container mx-auto px-20 py-15">
      <div className="flex flex-col gap-15">
        <div className="flex items-start justify-between gap-37">
          <div className="relative flex flex-col gap-2.5">
            <img 
              src="/images/sparkle-decoration.svg" 
              alt=""
              className="absolute -left-2.5 -top-7 h-6 w-[55px]"
            />
            <h2 className="heading-section">Featured Properties</h2>
            <p className="text-body max-w-[975px]">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
            </p>
          </div>
          <Button variant="outline" className="text-label hover:bg-bg-tertiary">
            View All Properties
          </Button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-5">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <CarouselControls
            currentIndex={currentIndex}
            total={totalPages}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
}