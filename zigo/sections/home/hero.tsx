"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck, Truck as TruckIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CinematicBackground } from "@/components/hero/cinematic-background";
import { HERO_STATS } from "@/constants/home";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <CinematicBackground />

      <Container className="relative z-10 flex w-full flex-col pb-24 pt-40 md:pb-28">
        <motion.div initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <ShieldCheck size={14} className="text-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Tanzania&apos;s Heavy Cargo Network
            </span>
          </motion.div>

          <h1 className="font-display text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            <motion.span custom={1} variants={fadeUp} className="block">
              Move Heavy Cargo
            </motion.span>
            <motion.span
              custom={2}
              variants={fadeUp}
              className="mt-1 block bg-gold-gradient bg-clip-text text-transparent"
            >
              Without The Wait.
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Book a verified heavy truck in under two minutes. Fast, reliable
            and nationwide — from Maswa, Simiyu to every industrial corridor
            in Tanzania.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <ButtonLink href="/book" variant="gold" size="lg">
              Book Truck
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-gold/50 hover:bg-white/5"
            >
              <FileText size={18} />
              Get A Quote
            </ButtonLink>
            <ButtonLink
              href="/fleet"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              <TruckIcon size={18} />
              View Fleet
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Floating stat card strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-20"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.07] md:p-5"
            >
              <div className="font-numeric text-2xl font-semibold text-white md:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/50 md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="h-10 w-[1px] overflow-hidden bg-white/20">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
