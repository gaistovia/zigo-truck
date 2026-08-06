"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { HERO_SCENES } from "@/constants/hero-scenes";

const SLIDE_DURATION_MS = 7000;

export function CinematicBackground() {
  const [index, setIndex] = useState(0);
  const multiScene = HERO_SCENES.length > 1;

  useEffect(() => {
    if (!multiScene) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SCENES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [multiScene]);

  // Subtle mouse-driven parallax drift
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const parallaxX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const parallaxY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const relX = (e.clientX / innerWidth - 0.5) * 2;
      const relY = (e.clientY / innerHeight - 0.5) * 2;
      mvX.set(relX * 14);
      mvY.set(relY * 10);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mvX, mvY]);

  const scene = HERO_SCENES[index] ?? HERO_SCENES[0];
  if (!scene) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={scene.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute -inset-4"
          >
            <div className="relative h-full w-full animate-kenburns [animation-duration:16s]">
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: scene.focalPoint }}
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Industrial overlay treatment */}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />

      {/* Lens flare / light streak, purely decorative */}
      <div className="pointer-events-none absolute -top-24 right-[10%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-[5%] h-64 w-64 animate-pulse-slow rounded-full bg-brand/25 blur-[110px]" />

      {/* Fine dust / grain texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      {/* Scene indicator dots — only shown once multiple scenes exist */}
      {multiScene && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {HERO_SCENES.map((s, i) => (
            <span
              key={s.src}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
