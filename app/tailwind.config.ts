import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          50: "#EEF0FD",
          100: "#DCE0FB",
          400: "#7C81EE",
          500: "#4F46E5",
          600: "#3F35CC",
          700: "#332AA3",
        },
        accent: {
          DEFAULT: "#7C3AED",
          400: "#9B6BF2",
          500: "#7C3AED",
          600: "#6425D6",
        },
        secondary: {
          DEFAULT: "#0F172A",
          light: "#1B2436",
        },
        data: "#22D3EE",
        canvas: "#050608",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, black), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        "mesh-glow":
          "radial-gradient(60% 50% at 20% 0%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0) 60%), radial-gradient(50% 40% at 90% 10%, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0) 60%), radial-gradient(40% 30% at 50% 100%, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(79,70,229,0.55)",
        "glow-violet": "0 0 40px -8px rgba(124,58,237,0.55)",
        "inner-glass": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        waveform: {
          "0%,100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        waveform: "waveform 1.2s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
