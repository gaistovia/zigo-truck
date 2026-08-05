"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { INDUSTRIES } from "@/constants/home";

export function Industries() {
  return (
    <section className="bg-white py-28 dark:bg-ink-800 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="One Platform. Every Sector That Moves Tanzania."
          description="Whatever you're moving, ZIGO has the truck type and the network to move it reliably."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-5 rounded-xl2 border border-ink-600/[0.06] p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand/20 hover:shadow-premium dark:border-white/[0.06]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/5 transition-colors duration-500 group-hover:bg-brand-gradient dark:bg-brand/10">
                <industry.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-brand transition-colors duration-500 group-hover:text-white dark:text-gold"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-white/55">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
