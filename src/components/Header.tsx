import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { NavigationLink } from "@/types";
import LogoIcon from "@/components/icons/LogoIcon";

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

export function Header({ navigationLinks }: HeaderProps) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="border-b border-border-primary">
      {showBanner && (
        <div className="relative border-b border-border-primary bg-bg-secondary">
          <img 
            src="/images/banner-background.svg" 
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="container relative z-10 mx-auto flex items-center justify-center gap-2 px-20 py-3.5">
            <span className="text-label">✨Discover Your Dream Property with Estatein</span>
            <Link to="#" className="text-label underline">
              Learn More
            </Link>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary hover:text-text-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
      
      <nav className="container mx-auto flex items-center justify-between px-20 py-5">
        <Link to="/" className="flex items-center">
          <LogoIcon width={113} height={34} className="text-brand-purple" />
        </Link>
        
        <div className="flex items-center gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-label hover:text-text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <Button className="text-label hover:bg-bg-tertiary" variant="outline">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}