import type { PropertyCardProps, TestimonialCardProps, FAQCardProps, FeatureCardProps, StatCardProps, NavigationLink, FooterLinks } from "@/types";

export const properties: PropertyCardProps[] = [
  {
    id: 1,
    name: "Seaside Serenity Villa",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa" as const,
    price: 550000,
    image: "/images/property-seaside-villa.png"
  },
  {
    id: 2,
    name: "Metropolitan Haven",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    bedrooms: 2,
    bathrooms: 2,
    type: "Villa" as const,
    price: 550000,
    image: "/images/property-metropolitan-haven.png"
  },
  {
    id: 3,
    name: "Rustic Retreat Cottage",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    bedrooms: 3,
    bathrooms: 3,
    type: "Villa" as const,
    price: 550000,
    image: "/images/property-rustic-cottage.png"
  }
];

export const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    rating: 5,
    title: "Exceptional Service!",
    content: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    author: "Wade Warren",
    location: "USA, California",
    avatar: "/images/avatar-wade-warren.png"
  },
  {
    id: 2,
    rating: 5,
    title: "Efficient and Reliable",
    content: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    author: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/images/avatar-emelie-thomson.png"
  },
  {
    id: 3,
    rating: 5,
    title: "Trusted Advisors",
    content: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: "John Mans",
    location: "USA, Nevada",
    avatar: "/images/avatar-john-mans.png"
  }
];

export const faqs: FAQCardProps[] = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    preview: "Learn how to use our user-friendly search tools to find properties that match your criteria."
  },
  {
    id: 2,
    question: "What documents do I need to sell my property through Estatein?",
    preview: "Find out about the necessary documentation for listing your property with us."
  },
  {
    id: 3,
    question: "How can I contact an Estatein agent?",
    preview: "Discover the different ways you can get in touch with our experienced agents."
  }
];

export const features: FeatureCardProps[] = [
  {
    id: 1,
    title: "Find Your Dream Home",
    icon: "home"
  },
  {
    id: 2,
    title: "Unlock Property Value",
    icon: "camera"
  },
  {
    id: 3,
    title: "Effortless Property Management",
    icon: "building"
  },
  {
    id: 4,
    title: "Smart Investments, Informed Decisions",
    icon: "sparkle"
  }
];

export const stats: StatCardProps[] = [
  {
    value: "200+",
    label: "Happy Customers"
  },
  {
    value: "10k+",
    label: "Properties For Clients"
  },
  {
    value: "16+",
    label: "Years of Experience"
  }
];

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" }
];

export const footerLinks: FooterLinks = {
  home: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"],
  aboutUs: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
  properties: ["Portfolio", "Categories"],
  services: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"],
  contactUs: ["Contact Form", "Our Offices"]
};