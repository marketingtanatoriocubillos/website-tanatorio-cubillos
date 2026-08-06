import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E6E",
        primaryLight: "#2D2D8F",
        primaryBg: "#EEF0FA",
        accent: "#F5A623",
        accentDark: "#1A1A1A",
        bgPage: "#fff8f0",
        bgCard: "#ffffff",
        bgSoft: "#F8F6F2",
        border: "#E8E8E8",
        borderWarm: "#F0EDE8",
        successBg: "#E7F6EC",
        successText: "#1F8A4C",
        text: "#1e1b16",
        textMuted: "#6B6B6B",
        textSubtle: "#9B9B9B",
        whatsapp: "#25D366",
        info: "#3A8FD4",
        brand: {
          primary: "#1E1E6E",
          accent: "#F5A623",
        },
      },
      fontFamily: {
        heading: ["Quicksand", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
};

export default config;
