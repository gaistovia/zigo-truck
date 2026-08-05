"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/constants/nav";
import { ButtonLink } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled || mobileOpen
          ? "bg-white/80 backdrop-blur-xl shadow-premium dark:bg-ink/80"
          : "bg-transparent"
      )}
    >
      <nav className="container-padded flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 z-10">
          <span
            className={cn(
              "font-display text-2xl font-bold tracking-tight transition-colors duration-300",
              scrolled || mobileOpen
                ? "text-brand dark:text-white"
                : "text-white"
            )}
          >
            ZIGO
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  scrolled ? "text-ink dark:text-white/80" : "text-white/90",
                  active && "font-semibold",
                  scrolled
                    ? "hover:text-brand dark:hover:text-gold"
                    : "hover:text-gold"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full",
                      scrolled ? "bg-brand dark:bg-gold" : "bg-gold"
                    )}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
              scrolled
                ? "border-ink-600/10 text-ink hover:bg-ink-600/5 dark:border-white/10 dark:text-white"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <ButtonLink href="/book" variant={scrolled ? "primary" : "gold"} size="sm">
            Book Truck
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <button
          className={cn(
            "z-10 flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            scrolled || mobileOpen
              ? "text-ink dark:text-white"
              : "text-white"
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white dark:bg-ink lg:hidden"
          >
            <div className="container-padded flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 text-lg font-medium text-ink hover:bg-brand/5 hover:text-brand dark:text-white dark:hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex items-center gap-3 px-4">
                <ButtonLink href="/book" className="flex-1">
                  Book Truck
                </ButtonLink>
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-600/10 text-ink dark:border-white/10 dark:text-white"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
              <p className="mt-4 px-4 text-sm text-ink-600 dark:text-white/50">
                {COMPANY_INFO.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
