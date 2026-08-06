"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How fast can I actually get a truck?",
    answer:
      "Most bookings are matched with a verified driver within 2 minutes of submitting your request, provided a suitable truck is available in your region.",
  },
  {
    question: "Is my cargo insured during transport?",
    answer:
      "Yes. Every booking made through ZIGO is covered by cargo insurance for the duration of the trip, from pickup to final delivery.",
  },
  {
    question: "Which regions does ZIGO currently cover?",
    answer:
      "ZIGO operates across 26 regions in Tanzania, with our home base in Maswa, Simiyu, and an expanding network of verified drivers nationwide.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing is based on distance, truck type, and cargo weight. You'll always see the full price before confirming your booking — no hidden fees.",
  },
];

export function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-28 dark:bg-ink md:py-36">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Answers Before You Ask"
        />

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-ink-600/[0.07] bg-white dark:border-white/[0.07] dark:bg-ink-700"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-ink dark:text-white md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-400 ease-premium dark:bg-gold/10 dark:text-gold",
                      isOpen && "rotate-45"
                    )}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 dark:text-white/60">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-600 dark:text-white/50">
          Have a different question?{" "}
          <Link href="/faq" className="font-semibold text-brand dark:text-gold hover:underline">
            View the full FAQ
          </Link>
        </p>
      </Container>
    </section>
  );
}
