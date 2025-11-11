import { useState } from "react";
import { FAQCard } from "@/components/FAQCard";
import { CarouselControls } from "@/components/CarouselControls";
import { Button } from "@/components/ui/button";
import type { FAQCardProps } from "@/types";

interface FAQSectionProps {
  faqs: FAQCardProps[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(faqs.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleFAQs = faqs.slice(
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
            <h2 className="heading-section">Frequently Asked Questions</h2>
            <p className="text-body max-w-[1003px]">
              Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <Button variant="outline" className="text-label hover:bg-bg-tertiary">
            View All FAQ's
          </Button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-5">
            {visibleFAQs.map((faq) => (
              <FAQCard key={faq.id} {...faq} />
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