import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d4ddea",
          200: "#a9bbd5",
          300: "#7e98c0",
          400: "#5376ab",
          500: "#345a92",
          600: "#264571",
          700: "#1c3458",
          800: "#13243d",
          900: "#0c1829",
          950: "#070f1a",
        },
        beige: {
          50: "#fcfaf6",
          100: "#f7f1e7",
          200: "#efe2cd",
          300: "#e4cfac",
          400: "#d7b886",
          500: "#cca268",
        },
        sand: "#f7f3ec",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(12, 24, 41, 0.12)",
        "card-hover": "0 16px 40px -12px rgba(12, 24, 41, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
