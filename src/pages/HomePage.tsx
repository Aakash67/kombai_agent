import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { properties, testimonials, faqs, features, stats, navigationLinks, footerLinks } from "@/data/homePageMockData";

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header navigationLinks={navigationLinks} />
      <main>
        <HeroSection stats={stats} />
        <FeaturesSection features={features} />
        <PropertiesSection properties={properties} />
        <TestimonialsSection testimonials={testimonials} />
        <FAQSection faqs={faqs} />
        <CTASection />
      </main>
      <Footer footerLinks={footerLinks} />
    </div>
  );
}