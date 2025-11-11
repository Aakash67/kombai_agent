import { useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CarouselControls } from "@/components/CarouselControls";
import { Button } from "@/components/ui/button";
import type { TestimonialCardProps } from "@/types";

interface TestimonialsSectionProps {
  testimonials: TestimonialCardProps[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonials.slice(
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
            <h2 className="heading-section">What Our Clients Say</h2>
            <p className="text-body max-w-[960px]">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
            </p>
          </div>
          <Button variant="outline" className="text-label hover:bg-bg-tertiary">
            View All Testimonials
          </Button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-5">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
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