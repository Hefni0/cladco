import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          gold: "#AAA369",
          "gold-dark": "#768064",
          cream: "#F1EADA",
          gray: "#6b7280",
          light: "#f8f8f8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-rev": "floatRev 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(0.5deg)" },
        },
        floatRev: {
          "0%, 100%": { transform: "translateY(-4px) rotate(-0.3deg)" },
          "50%": { transform: "translateY(4px) rotate(0.3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
