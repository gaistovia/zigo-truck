"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/constants/home";

export function Testimonials() {
  return (
    <section className="bg-white py-28 dark:bg-ink-800 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Trusted Across Tanzania"
          title="What Our Customers Say"
          description="Real businesses, real cargo, real results — hear from the people who rely on ZIGO every week."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-xl2 border border-ink-600/[0.06] bg-surface p-8 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-premium dark:bg-ink-700 dark:border-white/[0.06]"
            >
              <Quote className="absolute right-7 top-7 h-8 w-8 text-brand/10 dark:text-white/10" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-600 dark:text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-ink-600/[0.06] pt-5 dark:border-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-ink-600 dark:text-white/45">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
