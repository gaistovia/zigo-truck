"use client";

import { motion } from "framer-motion";
import { Globe2, UserCheck, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const TRUST_METRICS = [
  {
    icon: Globe2,
    value: 26,
    suffix: "",
    label: "Regions Covered",
    description: "Nationwide reach across mainland Tanzania.",
  },
  {
    icon: UserCheck,
    value: 540,
    suffix: "+",
    label: "Professional Drivers",
    description: "Licensed, background-checked and rated.",
  },
  {
    icon: ShieldCheck,
    value: 1240,
    suffix: "+",
    label: "Verified Fleet",
    description: "Every truck inspected and insured.",
  },
  {
    icon: Zap,
    value: 2,
    suffix: " min",
    label: "Fast Dispatch",
    description: "Average time to match a truck.",
  },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[900px] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px]" />

      <Container className="relative">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Trusted Nationwide
          </span>
          <h2 className="mt-6 max-w-2xl font-display text-balance text-3xl font-medium leading-tight text-white md:text-4xl">
            Serving Businesses Across Tanzania
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl3 bg-white/10 lg:grid-cols-4">
          {TRUST_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ink p-7 md:p-9"
            >
              <metric.icon size={22} strokeWidth={1.5} className="text-gold" />
              <div className="mt-5 font-numeric text-3xl font-semibold text-white md:text-4xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="mt-1 text-sm font-medium text-white/80">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-white/45">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
