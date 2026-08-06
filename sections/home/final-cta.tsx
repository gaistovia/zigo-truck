"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 animate-float rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-[100px] [animation-delay:3s]" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl"
        >
          Your Cargo Is Waiting.
          <br />
          Your Truck Is 2 Minutes Away.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-lg text-white/75"
        >
          Join thousands of businesses across Tanzania who trust ZIGO to move
          what matters, on time, every time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink href="/book" variant="gold" size="lg">
            Book Your Truck Now
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/25 text-white hover:border-white/50 hover:bg-white/10"
          >
            Talk To Our Team
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
