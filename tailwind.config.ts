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
          DEFAULT: "#6A1020",
          50: "#FBEBEC",
          100: "#F3CED2",
          200: "#E6A1A9",
          300: "#D2727F",
          400: "#B3475A",
          500: "#8A1830",
          600: "#6A1020",
          700: "#540D1A",
          800: "#3D0913",
          900: "#26060C",
        },
        gold: {
          DEFAULT: "#C8A76A",
          50: "#FBF8F2",
          100: "#F4E9D6",
          200: "#E8D3AC",
          300: "#DBBD82",
          400: "#C8A76A",
          500: "#B08B4C",
          600: "#8C6E3C",
          700: "#68522D",
          800: "#45371E",
        },
        ink: {
          DEFAULT: "#111111",
          800: "#191919",
          700: "#232323",
          600: "#3A3A3A",
        },
        surface: "#F5F5F5",
        line: "#E5E7EB",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        numeric: ["var(--font-ibm-plex-sans)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6A1020 0%, #3D0913 100%)",
        "gold-gradient": "linear-gradient(135deg, #C8A76A 0%, #8C6E3C 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(17,17,17,0.2) 0%, rgba(17,17,17,0.6) 55%, rgba(17,17,17,0.94) 100%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(200,167,106,0.15), transparent 60%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(17,17,17,0.25)",
        "premium-lg": "0 30px 90px -20px rgba(17,17,17,0.35)",
        gold: "0 10px 40px -10px rgba(200,167,106,0.5)",
        brand: "0 10px 40px -10px rgba(106,16,32,0.45)",
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
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1%, -1%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
        kenburns: "kenburns 12s ease-out forwards",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
