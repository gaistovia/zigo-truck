import type { Metadata } from "next";
import { ShieldCheck, Clock3, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BookingForm } from "@/sections/book/booking-form";

export const metadata: Metadata = {
  title: "Book A Truck",
  description:
    "Book a verified, insured truck across Tanzania in under two minutes. Enter your pickup, destination and cargo details to get matched instantly.",
};

const TRUST_POINTS = [
  {
    icon: Clock3,
    title: "2-Minute Matching",
    description: "Verified drivers respond fast, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Insured Cargo",
    description: "Every booking is covered from pickup to delivery.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "See your total cost before you confirm.",
  },
];

export default function BookPage() {
  return (
    <div className="bg-surface pb-28 pt-36 dark:bg-ink md:pt-44">
      <Container className="max-w-4xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand dark:border-gold/20 dark:bg-gold/5 dark:text-gold">
            Book A Truck
          </span>
          <h1 className="mt-6 font-display text-balance text-4xl font-medium leading-tight tracking-tight text-ink dark:text-white md:text-5xl">
            Tell Us What You&apos;re Moving.
            <br />
            We&apos;ll Handle The Rest.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-ink-600 dark:text-white/60">
            Fill in your shipment details below and get matched with a
            verified truck in minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 dark:border-white/[0.06] dark:bg-ink-700"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 dark:bg-gold/10">
                <point.icon size={18} className="text-brand dark:text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">
                  {point.title}
                </p>
                <p className="text-xs text-ink-600 dark:text-white/50">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
}
