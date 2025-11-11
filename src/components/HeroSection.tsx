import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import type { StatCardProps } from "@/types";

interface HeroSectionProps {
  stats: StatCardProps[];
}

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-20 py-15">
      <div className="flex gap-15">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="heading-hero">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-body max-w-[610px]">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" className="text-label hover:bg-bg-tertiary">
              Learn More
            </Button>
            <Button className="bg-brand-purple text-label hover:bg-brand-purple/90">
              Browse Properties
            </Button>
          </div>
          
          <div className="flex gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
        
        <div className="relative flex-1">
          <img 
            src="/images/hero-building.svg" 
            alt="Modern building"
            className="h-full w-full object-contain"
          />
          <img 
            src="/images/circular-badge.svg" 
            alt="Your Dream Property badge"
            className="absolute left-[15%] top-[12%] h-[129px] w-[129px]"
          />
        </div>
      </div>
    </section>
  );
}