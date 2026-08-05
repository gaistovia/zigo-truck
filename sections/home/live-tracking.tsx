"use client";

import { motion } from "framer-motion";
import { Truck, PhoneCall, Star, Navigation, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LiveTracking() {
  return (
    <section className="bg-surface py-28 dark:bg-ink md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Live Tracking"
          title="Know Exactly Where Your Cargo Is"
          description="Every ZIGO booking comes with real-time GPS tracking — from pickup confirmation to final delivery."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid overflow-hidden rounded-xl3 border border-ink-600/[0.06] bg-white shadow-premium-lg dark:bg-ink-700 dark:border-white/[0.06] lg:grid-cols-[1.4fr_1fr]"
        >
          {/* Map panel */}
          <div className="relative h-[380px] overflow-hidden bg-ink lg:h-auto">
            <svg
              viewBox="0 0 600 500"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
                <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#C59D5F" />
                  <stop offset="100%" stopColor="#6E1020" />
                </linearGradient>
              </defs>
              <rect width="600" height="500" fill="url(#grid)" />

              <path
                id="routePath"
                d="M 70 400 C 150 300, 180 260, 250 240 S 380 180, 420 140 S 500 90, 540 70"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeDasharray="8 8"
                strokeLinecap="round"
                opacity="0.8"
              />

              <circle cx="70" cy="400" r="7" fill="#C59D5F" />
              <circle cx="70" cy="400" r="14" fill="#C59D5F" opacity="0.25" />
              <circle cx="540" cy="70" r="7" fill="#6E1020" stroke="white" strokeWidth="2" />

              <motion.circle
                r="9"
                fill="#ffffff"
                stroke="#C59D5F"
                strokeWidth="3"
                animate={{
                  offsetDistance: ["0%", "100%"],
                }}
                style={{
                  offsetPath: "path('M 70 400 C 150 300, 180 260, 250 240 S 380 180, 420 140 S 500 90, 540 70')",
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            <div className="absolute left-6 top-6 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Pickup</p>
              <p className="text-sm font-semibold text-white">Maswa, Simiyu</p>
            </div>
            <div className="absolute right-6 top-6 rounded-xl bg-white/10 px-4 py-2 text-right backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Destination</p>
              <p className="text-sm font-semibold text-white">Mwanza City</p>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300">
                Live — In Transit
              </span>
            </div>
          </div>

          {/* Details panel */}
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-600 dark:text-white/40">
                    Shipment #ZG-48213
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-white">
                    Heavy Truck — Cement Load
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 dark:bg-brand/20">
                  <Truck size={22} className="text-brand dark:text-gold" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-surface p-4 dark:bg-ink-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white font-display font-semibold">
                  JM
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-ink dark:text-white">John Mwita</p>
                  <div className="flex items-center gap-1 text-xs text-ink-600 dark:text-white/50">
                    <Star size={12} className="fill-gold text-gold" />
                    4.9 · 1,240 deliveries
                  </div>
                </div>
                <a
                  href="tel:+255620000000"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-105"
                  aria-label="Call driver"
                >
                  <PhoneCall size={16} />
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-ink-600/[0.06] p-4 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-ink-600 dark:text-white/50">
                    <Clock3 size={14} />
                    <span className="text-xs">ETA</span>
                  </div>
                  <p className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">
                    1h 24min
                  </p>
                </div>
                <div className="rounded-2xl border border-ink-600/[0.06] p-4 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-ink-600 dark:text-white/50">
                    <Navigation size={14} />
                    <span className="text-xs">Distance Left</span>
                  </div>
                  <p className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">
                    62 km
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-600/10 dark:bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="h-full rounded-full bg-gold-gradient"
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-ink-600 dark:text-white/40">
                <span>Picked Up</span>
                <span>In Transit</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
