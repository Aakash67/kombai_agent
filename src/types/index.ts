// Props types
export interface PropertyCardProps {
  id: number;
  name: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: number;
  image: string;
}

export interface TestimonialCardProps {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
  location: string;
  avatar: string;
}

export interface FAQCardProps {
  id: number;
  question: string;
  preview: string;
}

export interface FeatureCardProps {
  id: number;
  title: string;
  icon: string;
}

export interface StatCardProps {
  value: string;
  label: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  home: string[];
  aboutUs: string[];
  properties: string[];
  services: string[];
  contactUs: string[];
}

export interface HomePageProps {
  properties: PropertyCardProps[];
  testimonials: TestimonialCardProps[];
  faqs: FAQCardProps[];
  features: FeatureCardProps[];
  stats: StatCardProps[];
  navigationLinks: NavigationLink[];
  footerLinks: FooterLinks;
}