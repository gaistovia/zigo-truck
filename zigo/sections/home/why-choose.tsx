"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_CHOOSE_ZIGO } from "@/constants/home";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why ZIGO"
          title="Built For Businesses That Can't Afford Delays"
          description="ZIGO isn't just an app — it's the operational backbone that keeps cargo, construction and harvests moving on schedule."
          light
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-xl3 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ZIGO.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-ink p-9 transition-colors duration-500 hover:bg-ink-700"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 transition-all duration-500 ease-premium group-hover:scale-110 group-hover:border-gold/40">
                <feature.icon size={24} strokeWidth={1.5} className="text-gold" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
