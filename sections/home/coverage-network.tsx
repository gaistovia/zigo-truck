"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const REGIONS = [
  { name: "Mwanza", angle: -55, distance: 150 },
  { name: "Shinyanga", angle: -15, distance: 165 },
  { name: "Dodoma", angle: 25, distance: 175 },
  { name: "Arusha", angle: -95, distance: 175 },
  { name: "Dar es Salaam", angle: 60, distance: 190 },
  { name: "Mbeya", angle: 130, distance: 170 },
  { name: "Tabora", angle: 160, distance: 150 },
  { name: "Kagera", angle: -135, distance: 165 },
];

function polarToCartesian(angleDeg: number, distance: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: 300 + distance * Math.cos(angleRad),
    y: 260 + distance * Math.sin(angleRad),
  };
}

export function CoverageNetwork() {
  return (
    <section className="overflow-hidden bg-surface py-28 dark:bg-ink md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Coverage Network"
          title="One Dispatch Hub. Nationwide Reach."
          description="ZIGO operates from Maswa, Simiyu, coordinating a verified truck network across every major region of mainland Tanzania."
        />

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <svg
              viewBox="0 0 600 520"
              className="h-auto w-full"
              role="img"
              aria-label="Diagram showing ZIGO's dispatch hub in Maswa, Simiyu connected to regions across Tanzania"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C8A76A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C8A76A" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="300" cy="260" r="150" fill="url(#hubGlow)" />

              {REGIONS.map((region, i) => {
                const pos = polarToCartesian(region.angle, region.distance);
                return (
                  <motion.line
                    key={region.name}
                    x1="300"
                    y1="260"
                    x2={pos.x}
                    y2={pos.y}
                    stroke="#6A1020"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="dark:stroke-white/20"
                  />
                );
              })}

              {REGIONS.map((region, i) => {
                const pos = polarToCartesian(region.angle, region.distance);
                return (
                  <motion.g
                    key={region.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <circle cx={pos.x} cy={pos.y} r="5" fill="#6A1020" className="dark:fill-gold" />
                    <text
                      x={pos.x}
                      y={pos.y - 14}
                      textAnchor="middle"
                      className="fill-ink text-[13px] font-medium dark:fill-white/80"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {region.name}
                    </text>
                  </motion.g>
                );
              })}

              {/* Hub */}
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <circle cx="300" cy="260" r="34" fill="#6A1020" />
                <circle cx="300" cy="260" r="34" stroke="#C8A76A" strokeWidth="2" fill="none" opacity="0.5" />
                <motion.circle
                  cx="300"
                  cy="260"
                  r="34"
                  stroke="#C8A76A"
                  strokeWidth="2"
                  fill="none"
                  animate={{ r: [34, 54], opacity: [0.6, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.g>
            </svg>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center pointer-events-none">
              <MapPin size={16} className="text-gold" />
              <span className="mt-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-white">
                Maswa, Simiyu
              </span>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-ink-600 dark:text-white/40">
          Illustrative dispatch network — not a geographic map.
        </p>
      </Container>
    </section>
  );
}
