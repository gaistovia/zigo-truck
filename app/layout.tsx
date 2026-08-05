import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CallButton } from "@/components/layout/call-button";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LoadingScreen } from "@/components/layout/loading-screen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://zigo.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZIGO | Get A Truck In 2 Min. Not 2 Days.",
    template: "%s | ZIGO",
  },
  description:
    "ZIGO is Tanzania's fastest truck booking platform, connecting businesses, farmers and manufacturers with verified trucks in under two minutes. Based in Maswa, Simiyu.",
  keywords: [
    "truck booking Tanzania",
    "cargo transportation Tanzania",
    "logistics Maswa Simiyu",
    "truck hire Tanzania",
    "freight booking app",
    "ZIGO logistics",
  ],
  authors: [{ name: "ZIGO Logistics" }],
  creator: "ZIGO Logistics",
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: SITE_URL,
    siteName: "ZIGO",
    title: "ZIGO | Get A Truck In 2 Min. Not 2 Days.",
    description:
      "Tanzania's fastest truck booking platform. Verified trucks, transparent pricing, live tracking.",
    images: [
      {
        url: "/images/zigo-hero-truck.png",
        width: 1447,
        height: 1086,
        alt: "ZIGO truck and driver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIGO | Get A Truck In 2 Min. Not 2 Days.",
    description:
      "Tanzania's fastest truck booking platform. Verified trucks, transparent pricing, live tracking.",
    images: ["/images/zigo-hero-truck.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F8F8" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <CallButton />
            <BackToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
