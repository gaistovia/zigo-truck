"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CARGO_SHOWCASE } from "@/constants/cargo";

export function CargoShowcase() {
  return (
    <section className="border-y border-line bg-white py-28 dark:border-white/[0.06] dark:bg-ink-800 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="What We Transport"
          title="If It's Heavy, We Move It"
          description="ZIGO's fleet is built for cargo that can't be handled by ordinary delivery vehicles."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARGO_SHOWCASE.map((cargo, i) => (
            <motion.div
              key={cargo.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl2 border border-line bg-surface p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-premium dark:border-white/[0.06] dark:bg-ink-700"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 ease-premium group-hover:scale-x-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white transition-colors duration-500 group-hover:bg-brand-gradient">
                <cargo.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink dark:text-white">
                {cargo.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-white/55">
                {cargo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
