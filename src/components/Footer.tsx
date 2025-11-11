import { useState } from "react";
import { Send, Mail, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { FooterLinks } from "@/types";
import LogoIcon from "@/components/icons/LogoIcon";

interface FooterProps {
  footerLinks: FooterLinks;
}

export function Footer({ footerLinks }: FooterProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError && email) {
      console.log("Email submitted:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-bg-primary">
      <div className="container mx-auto px-20 py-15">
        <div className="flex gap-20">
          <div className="flex flex-col gap-6">
            <LogoIcon width={113} height={34} />
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center gap-2 rounded-lg border border-border-primary bg-bg-secondary px-4 py-3">
                <Mail className="h-4 w-4 text-text-secondary" />
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border-0 bg-transparent p-0 text-label-secondary placeholder:text-text-secondary focus-visible:ring-0"
                />
                <button type="submit" disabled={!!emailError || !email}>
                  <Send className="h-5 w-5 text-text-primary" />
                </button>
              </div>
              {emailError && (
                <span className="mt-1 text-xs text-red-500">{emailError}</span>
              )}
            </form>
          </div>

          <div className="grid flex-1 grid-cols-5 gap-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-footer-heading">Home</h3>
              <div className="flex flex-col gap-4">
                {footerLinks.home.map((link) => (
                  <Link key={link} to="#" className="text-link hover:text-text-secondary">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-footer-heading">About Us</h3>
              <div className="flex flex-col gap-4">
                {footerLinks.aboutUs.map((link) => (
                  <Link key={link} to="#" className="text-link hover:text-text-secondary">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-footer-heading">Properties</h3>
              <div className="flex flex-col gap-4">
                {footerLinks.properties.map((link) => (
                  <Link key={link} to="#" className="text-link hover:text-text-secondary">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-footer-heading">Services</h3>
              <div className="flex flex-col gap-4">
                {footerLinks.services.map((link) => (
                  <Link key={link} to="#" className="text-link hover:text-text-secondary">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-footer-heading">Contact Us</h3>
              <div className="flex flex-col gap-4">
                {footerLinks.contactUs.map((link) => (
                  <Link key={link} to="#" className="text-link hover:text-text-secondary">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-15 flex items-center justify-between border-t border-border-primary pt-7">
          <div className="flex gap-6">
            <span className="text-sm font-medium tracking-[-0.08px] text-text-primary">
              @2023 Estatein. All Rights Reserved.
            </span>
            <Link to="#" className="text-sm font-medium tracking-[-0.08px] text-text-primary hover:text-text-secondary">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-bg-tertiary">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-bg-tertiary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-bg-tertiary">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-bg-tertiary">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}