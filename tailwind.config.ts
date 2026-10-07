import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFDF",
        black: "#0A0809",
        yellow: "#FAD30C",
        orange: "#ED8C25",
        magenta: "#E624E3",
        blue: "#295DDA",
      },
      boxShadow: {
        brutal: "6px 8px 0px 0px #0A0809",
        "brutal-sm": "4px 6px 0px 0px #0A0809",
        "brutal-hover": "2px 2px 0px 0px #0A0809",
        "brutal-active": "0px 0px 0px 0px #0A0809",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
