import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { COMPANY_INFO } from "@/constants/nav";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Book A Truck", href: "/book" },
    { label: "Track Shipment", href: "/track" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <Container className="relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-3xl font-bold tracking-tight">
              ZIGO
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Tanzania&apos;s fastest truck booking platform. We connect
              businesses, farmers and manufacturers with verified trucks in
              under two minutes — not two days.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-gold" />
                {COMPANY_INFO.location}
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                {COMPANY_INFO.phone}
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                {COMPANY_INFO.email}
              </div>
            </div>
            <div className="mt-7 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                {title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} ZIGO Logistics. All rights reserved.
          </p>
          <p>Built and operated in Maswa, Simiyu, Tanzania.</p>
        </div>
      </Container>
    </footer>
  );
}
