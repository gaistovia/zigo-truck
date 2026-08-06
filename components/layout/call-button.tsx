"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/constants/nav";

export function CallButton() {
  return (
    <motion.a
      href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
      aria-label="Call ZIGO"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-brand"
    >
      <Phone size={20} />
    </motion.a>
  );
}
