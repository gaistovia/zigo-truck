"use client";

import { motion } from "framer-motion";
import { TrendingUp, Truck, Users, Package, MoreHorizontal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const METRICS = [
  { label: "Active Deliveries", value: "184", change: "+12.4%", icon: Package },
  { label: "Fleet On Road", value: "312", change: "+6.1%", icon: Truck },
  { label: "Active Drivers", value: "540", change: "+3.8%", icon: Users },
  { label: "Monthly Revenue", value: "TZS 412M", change: "+18.2%", icon: TrendingUp },
];

const BARS = [42, 58, 39, 71, 64, 88, 52, 96, 74, 61, 83, 68];

export function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-surface py-28 dark:bg-ink md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Operations Dashboard"
          title="Fleet Intelligence, Built For Scale"
          description="Behind every ZIGO booking is a real-time operations platform tracking fleet performance, drivers and revenue."
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-xl3 border border-line bg-white shadow-premium-lg dark:bg-ink-700 dark:border-white/[0.08]"
        >
          {/* Fake window chrome */}
          <div className="flex items-center gap-2 border-b border-line px-6 py-4 dark:border-white/[0.06]">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            <span className="ml-4 text-xs text-ink-600 dark:text-white/40">
              dashboard.zigo.co.tz
            </span>
          </div>

          <div className="grid gap-px bg-ink-600/[0.06] p-px dark:bg-white/[0.06] md:grid-cols-4">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 dark:bg-ink-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 dark:bg-brand/20">
                    <metric.icon size={18} className="text-brand dark:text-gold" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {metric.change}
                  </span>
                </div>
                <p className="mt-4 font-numeric text-2xl font-semibold text-ink dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-ink-600 dark:text-white/50">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-px bg-ink-600/[0.06] p-px dark:bg-white/[0.06] lg:grid-cols-[1.6fr_1fr]">
            {/* Chart panel */}
            <div className="bg-white p-8 dark:bg-ink-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-ink dark:text-white">
                    Deliveries This Year
                  </p>
                  <p className="text-xs text-ink-600 dark:text-white/40">
                    Jan — Dec 2026
                  </p>
                </div>
                <MoreHorizontal size={18} className="text-ink-600 dark:text-white/40" />
              </div>
              <div className="mt-8 flex h-48 items-end gap-2.5 md:gap-3">
                {BARS.map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-gold/80 transition-opacity hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Fleet status list */}
            <div className="bg-white p-8 dark:bg-ink-700">
              <p className="font-display text-lg font-semibold text-ink dark:text-white">
                Fleet Status
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { label: "In Transit", value: 62, color: "bg-brand" },
                  { label: "Loading", value: 21, color: "bg-gold" },
                  { label: "Available", value: 17, color: "bg-emerald-500" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs text-ink-600 dark:text-white/50">
                      <span>{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-600/10 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full ${s.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
