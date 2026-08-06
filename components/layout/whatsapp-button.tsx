"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/constants/nav";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ZIGO%2C%20I%27d%20like%20to%20book%20a%20truck.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZIGO on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium-lg"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor">
        <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.256.594 4.44 1.72 6.37L3.2 28.8l6.62-1.688a12.75 12.75 0 0 0 6.18 1.575h.006c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.687-12.805-12.687Zm0 23.36a10.55 10.55 0 0 1-5.38-1.475l-.386-.23-4.006 1.02 1.07-3.905-.252-.4a10.53 10.53 0 0 1-1.63-5.615c0-5.834 4.75-10.585 10.59-10.585 2.83 0 5.49 1.104 7.49 3.104a10.52 10.52 0 0 1 3.1 7.49c0 5.835-4.75 10.596-10.596 10.596Zm5.803-7.926c-.318-.16-1.882-.93-2.174-1.036-.29-.107-.503-.16-.715.16-.212.318-.822 1.036-1.008 1.248-.186.212-.372.24-.69.08-.318-.16-1.344-.495-2.56-1.577-.946-.844-1.585-1.885-1.77-2.203-.187-.318-.02-.49.14-.65.144-.143.318-.372.478-.558.16-.186.212-.318.318-.53.106-.212.053-.398-.027-.558-.08-.16-.715-1.722-.98-2.358-.258-.62-.52-.536-.715-.546l-.61-.01c-.212 0-.558.08-.85.398-.292.318-1.114 1.09-1.114 2.653 0 1.564 1.14 3.075 1.3 3.287.16.212 2.244 3.427 5.436 4.805.76.328 1.353.524 1.816.67.763.243 1.457.209 2.006.127.612-.092 1.882-.77 2.148-1.512.265-.743.265-1.38.186-1.512-.08-.133-.292-.212-.61-.372Z" />
      </svg>
    </motion.a>
  );
}
