import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070806",
        basalt: "#10120D",
        olive: "#3F4A2F",
        sage: "#99A47C",
        terracotta: "#B85C38",
        ember: "#E3773D",
        italyGreen: "#008C45",
        italyRed: "#CD212A",
        italyWhite: "#F4F5F0",
        deepGreen: "#123D2D",
        deepRed: "#6F171B",
        gold: "#D6B46A",
        cream: "#F7F0DF",
        parchment: "#D7C7A0"
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214, 180, 106, 0.22), 0 18px 70px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
