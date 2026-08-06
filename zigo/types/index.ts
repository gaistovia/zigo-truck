import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FleetTruck {
  id: string;
  name: string;
  category: string;
  capacity: string;
  suitableCargo: string[];
  availability: "Available Now" | "Limited Availability" | "High Demand";
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
