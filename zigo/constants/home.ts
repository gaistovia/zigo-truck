import {
  Search,
  Truck,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Clock,
  Wallet,
  Headphones,
  Route,
  BadgeCheck,
  Wheat,
  HardHat,
  Factory,
  Store,
  Ship,
  Pickaxe,
} from "lucide-react";
import type { Stat, Step, Feature, Industry, Testimonial } from "@/types";

export const HERO_STATS: Stat[] = [
  { label: "Trucks On Network", value: 1240, suffix: "+" },
  { label: "Deliveries Completed", value: 18500, suffix: "+" },
  { label: "Regions Covered", value: 26 },
  { label: "Avg. Booking Time", value: 2, suffix: " min" },
];

export const HOW_IT_WORKS: Step[] = [
  {
    number: "01",
    title: "Tell Us What You're Moving",
    description:
      "Enter your pickup point, destination, and cargo details. Our system instantly matches you with the right truck type.",
    icon: Search,
  },
  {
    number: "02",
    title: "Get Matched In Minutes",
    description:
      "ZIGO's network of verified drivers responds fast — you'll see availability and pricing in under two minutes.",
    icon: Truck,
  },
  {
    number: "03",
    title: "Track Every Kilometer",
    description:
      "Follow your shipment live from pickup to delivery with real-time location updates and driver contact.",
    icon: MapPinned,
  },
  {
    number: "04",
    title: "Cargo Delivered, Confirmed",
    description:
      "Receive proof of delivery and confirmation the moment your goods arrive — safely and on schedule.",
    icon: PackageCheck,
  },
];

export const WHY_CHOOSE_ZIGO: Feature[] = [
  {
    title: "2-Minute Booking",
    description:
      "No phone calls, no waiting rooms of brokers. Book a verified truck faster than it takes to make tea.",
    icon: Clock,
  },
  {
    title: "Verified Drivers Only",
    description:
      "Every driver on ZIGO is background-checked, licensed, and rated by real customers before they touch your cargo.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "See your price upfront — no hidden fees, no last-minute negotiations at the loading point.",
    icon: Wallet,
  },
  {
    title: "Live GPS Tracking",
    description:
      "Know exactly where your goods are, every step of the journey, from Maswa to anywhere in Tanzania.",
    icon: Route,
  },
  {
    title: "24/7 Support Team",
    description:
      "Real humans, always available on call or WhatsApp — because logistics doesn't stop at 5 PM.",
    icon: Headphones,
  },
  {
    title: "Insured Shipments",
    description:
      "Every booking on ZIGO is covered, so your cargo — and your business — is protected end to end.",
    icon: BadgeCheck,
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Construction",
    description: "Cement, steel, aggregates and equipment moved on schedule to keep sites running.",
    icon: HardHat,
  },
  {
    name: "Agriculture",
    description: "Get harvests from farm to market fast, minimizing spoilage and maximizing margin.",
    icon: Wheat,
  },
  {
    name: "Mining",
    description: "Heavy-duty haulage for minerals and materials across Tanzania's mining corridors.",
    icon: Pickaxe,
  },
  {
    name: "Manufacturing",
    description: "Reliable inbound and outbound freight for factories that can't afford downtime.",
    icon: Factory,
  },
  {
    name: "Retail",
    description: "Stock your shelves on time, every time, with dependable last-mile distribution.",
    icon: Store,
  },
  {
    name: "Export",
    description: "Border-ready logistics moving goods efficiently to regional and port destinations.",
    icon: Ship,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Emmanuel Mushi",
    role: "Operations Manager",
    company: "Simiyu Grain Traders",
    quote:
      "Before ZIGO, sourcing a truck during harvest season could take two full days of phone calls. Now I book from my phone and a truck is at my warehouse within the hour.",
    rating: 5,
  },
  {
    name: "Grace Kileo",
    role: "Site Supervisor",
    company: "Kileo Construction Ltd",
    quote:
      "The live tracking changed how we plan our sites. We know exactly when materials arrive, so our crews are never standing around waiting.",
    rating: 5,
  },
  {
    name: "Daniel Mwakalinga",
    role: "Founder",
    company: "Mwakalinga Retail Group",
    quote:
      "Transparent pricing is the biggest win for us. No more negotiating at the loading point — we know the cost before the truck even leaves.",
    rating: 5,
  },
];
