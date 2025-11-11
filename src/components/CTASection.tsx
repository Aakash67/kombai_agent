import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container mx-auto px-20 py-15">
      <div className="relative overflow-hidden border-y border-border-primary bg-bg-secondary py-15">
        <img 
          src="/images/cta-abstract-left.svg" 
          alt=""
          className="absolute left-0 top-0 h-full"
        />
        <img 
          src="/images/cta-abstract-right.svg" 
          alt=""
          className="absolute right-0 top-0 h-full"
        />
        
        <div className="relative z-10 mx-auto flex max-w-[1058px] flex-col items-center gap-7 text-center">
          <h2 className="heading-section">Start Your Real Estate Journey Today</h2>
          <p className="text-body">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
          <Button className="bg-brand-purple text-label hover:bg-brand-purple/90">
            Explore Properties
          </Button>
        </div>
      </div>
    </section>
  );
}