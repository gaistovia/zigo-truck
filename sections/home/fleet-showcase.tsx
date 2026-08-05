"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Truck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FLEET } from "@/constants/fleet";

const availabilityStyle: Record<string, string> = {
  "Available Now": "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  "Limited Availability": "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  "High Demand": "bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-200",
};

export function FleetShowcase() {
  const featured = FLEET.slice(0, 4);

  return (
    <section className="bg-white py-28 dark:bg-ink-800 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Every Truck Type. Ready When You Are."
            description="From light pickups to refrigerated haulage, ZIGO's verified fleet covers every cargo need across Tanzania."
            align="left"
            className="items-start text-left"
          />
          <ButtonLink href="/fleet" variant="outline" className="hidden shrink-0 md:inline-flex">
            View Full Fleet
            <ArrowUpRight size={16} />
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((truck, i) => (
            <motion.div
              key={truck.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-xl2 border border-ink-600/[0.06] bg-surface p-7 transition-all duration-500 ease-premium hover:-translate-y-2 hover:border-brand/15 hover:shadow-premium-lg dark:bg-ink-700 dark:border-white/[0.06]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-700 ease-premium group-hover:scale-150 dark:bg-brand/10" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient shadow-brand transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-105">
                <Truck size={28} className="text-white" strokeWidth={1.75} />
              </div>

              <span
                className={`relative mt-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold ${availabilityStyle[truck.availability]}`}
              >
                {truck.availability}
              </span>

              <h3 className="relative mt-3 font-display text-xl font-semibold text-ink dark:text-white">
                {truck.name}
              </h3>
              <p className="relative mt-1 text-sm font-medium text-brand dark:text-gold">
                {truck.capacity}
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-1.5">
                {truck.suitableCargo.slice(0, 3).map((cargo) => (
                  <li
                    key={cargo}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] text-ink-600 shadow-sm dark:bg-ink-800 dark:text-white/60"
                  >
                    {cargo}
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand dark:text-white dark:group-hover:text-gold"
              >
                Request Truck
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <ButtonLink href="/fleet" variant="outline" className="mt-10 w-full md:hidden">
          View Full Fleet
          <ArrowUpRight size={16} />
        </ButtonLink>
      </Container>
    </section>
  );
}
