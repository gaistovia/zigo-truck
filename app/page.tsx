import type { Metadata } from "next";
import { Hero } from "@/sections/home/hero";
import { TrustSection } from "@/sections/home/trust-section";
import { HowItWorks } from "@/sections/home/how-it-works";
import { FleetShowcase } from "@/sections/home/fleet-showcase";
import { CargoShowcase } from "@/sections/home/cargo-showcase";
import { WhyChoose } from "@/sections/home/why-choose";
import { LiveTracking } from "@/sections/home/live-tracking";
import { CoverageNetwork } from "@/sections/home/coverage-network";
import { Industries } from "@/sections/home/industries";
import { DashboardPreview } from "@/sections/home/dashboard-preview";
import { Testimonials } from "@/sections/home/testimonials";
import { FAQPreview } from "@/sections/home/faq-preview";
import { FinalCTA } from "@/sections/home/final-cta";

export const metadata: Metadata = {
  title: "ZIGO | Get A Truck In 2 Min. Not 2 Days.",
  description:
    "Book verified, insured trucks across Tanzania in under two minutes. Live tracking, transparent pricing, 24/7 support. Based in Maswa, Simiyu.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HowItWorks />
      <FleetShowcase />
      <CargoShowcase />
      <WhyChoose />
      <LiveTracking />
      <CoverageNetwork />
      <Industries />
      <DashboardPreview />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
