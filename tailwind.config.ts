import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6E1020",
          50: "#FBEBEC",
          100: "#F3CED2",
          200: "#E6A1A9",
          300: "#D2727F",
          400: "#B3475A",
          500: "#8F1B32",
          600: "#6E1020",
          700: "#570D1A",
          800: "#3F0913",
          900: "#28060C",
        },
        gold: {
          DEFAULT: "#C59D5F",
          50: "#FBF7F0",
          100: "#F3E7D3",
          200: "#E6CEA6",
          300: "#D9B67F",
          400: "#C59D5F",
          500: "#AD8145",
          600: "#8A6636",
          700: "#674C29",
          800: "#45331B",
        },
        ink: {
          DEFAULT: "#121212",
          800: "#1A1A1A",
          700: "#242424",
          600: "#333333",
        },
        surface: "#F8F8F8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6E1020 0%, #3F0913 100%)",
        "gold-gradient": "linear-gradient(135deg, #C59D5F 0%, #8A6636 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(18,18,18,0.15) 0%, rgba(18,18,18,0.55) 55%, rgba(18,18,18,0.92) 100%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(197,157,95,0.15), transparent 60%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(18,18,18,0.25)",
        "premium-lg": "0 30px 90px -20px rgba(18,18,18,0.35)",
        gold: "0 10px 40px -10px rgba(197,157,95,0.5)",
        brand: "0 10px 40px -10px rgba(110,16,32,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
