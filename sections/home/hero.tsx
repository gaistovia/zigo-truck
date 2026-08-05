"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/zigo-hero-truck.png"
          alt="ZIGO truck driver standing in front of a ZIGO cargo truck at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] md:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      </div>

      {/* Floating gold glow */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 animate-float rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-10 top-40 h-72 w-72 animate-float rounded-full bg-brand/30 blur-[100px] [animation-delay:2s]" />

      <Container className="relative z-10 flex w-full flex-col pb-24 pt-40 md:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <ShieldCheck size={14} className="text-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Tanzania&apos;s Fastest Truck Network
            </span>
          </motion.div>

          <h1 className="font-display text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <motion.span custom={1} variants={fadeUp} className="block">
              Need A Truck?
            </motion.span>
            <motion.span
              custom={2}
              variants={fadeUp}
              className="mt-1 block bg-gold-gradient bg-clip-text text-transparent"
            >
              Get One In Under
            </motion.span>
            <motion.span custom={3} variants={fadeUp} className="block">
              2 Minutes.
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={fadeUp}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/70 md:text-xl"
          >
            From Maswa to every corner of Tanzania — ZIGO connects you with
            verified, insured trucks in minutes. No brokers. No waiting. Just
            cargo, moved.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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
              <PlayCircle size={18} />
              Get A Quote
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 md:mt-20"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-semibold text-white md:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50 md:text-sm">
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
