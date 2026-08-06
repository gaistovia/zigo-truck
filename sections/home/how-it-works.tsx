"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { HOW_IT_WORKS } from "@/constants/home";

export function HowItWorks() {
  return (
    <section className="relative bg-surface py-28 dark:bg-ink md:py-36">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title="Booking A Truck Has Never Been This Simple"
          description="Four steps stand between your cargo and its destination. That's the entire ZIGO experience."
        />

        <div className="relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line for desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent lg:block" />

          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col"
            >
              <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border border-brand/10 bg-white shadow-premium transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:shadow-premium-lg dark:bg-ink-700 dark:border-white/10">
                <span className="absolute -top-2 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient font-display text-xs font-bold text-ink shadow-gold">
                  {step.number}
                </span>
                <step.icon size={36} strokeWidth={1.5} className="text-brand dark:text-gold" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
