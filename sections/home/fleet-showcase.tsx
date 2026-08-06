"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FLEET } from "@/constants/fleet";

const availabilityStyle: Record<string, string> = {
  "Available Now": "bg-emerald-400/15 text-emerald-300",
  "Limited Availability": "bg-amber-400/15 text-amber-300",
  "High Demand": "bg-gold/15 text-gold",
};

export function FleetShowcase() {
  const featured = FLEET.slice(0, 4);

  return (
    <section className="bg-white py-28 dark:bg-ink-800 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Heavy-Duty Trucks. Ready When You Are."
            description="From flatbeds to refrigerated haulage, every truck in the ZIGO network is inspected, insured and dispatch-ready."
            align="left"
            className="items-start text-left"
          />
          <ButtonLink href="/fleet" variant="outline" className="hidden shrink-0 md:inline-flex">
            View Full Fleet
            <ArrowUpRight size={16} />
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {featured.map((truck, i) => (
            <motion.div
              key={truck.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-xl3 shadow-premium transition-shadow duration-500 ease-premium hover:shadow-premium-lg"
            >
              <Image
                src={truck.image}
                alt={`ZIGO ${truck.name}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[70%_30%] transition-transform [transition-duration:1200ms] ease-premium group-hover:scale-[1.06]"
              />
              {/* Industrial duotone overlay for brand consistency across a single source photo */}
              <div className="absolute inset-0 bg-brand/55 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="relative z-10 p-7">
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${availabilityStyle[truck.availability]}`}
                >
                  {truck.availability}
                </span>

                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {truck.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {truck.capacity}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {truck.suitableCargo.slice(0, 3).map((cargo) => (
                    <li
                      key={cargo}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm"
                    >
                      {cargo}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-gold"
                >
                  Request Truck
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
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
