import { FeatureCard } from "@/components/FeatureCard";
import type { FeatureCardProps } from "@/types";

interface FeaturesSectionProps {
  features: FeatureCardProps[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="container mx-auto px-20 py-15">
      <div className="grid grid-cols-4 gap-4 border border-border-primary p-2.5 shadow-[0px_0px_0px_6px_#191919]">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}