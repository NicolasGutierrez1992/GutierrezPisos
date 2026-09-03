import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        walnut: {
          50: "#faf6f1",
          100: "#f2e9de",
          200: "#e3cfb4",
          300: "#d1ae82",
          400: "#bd8c5a",
          500: "#a8713f",
          600: "#8a5934",
          700: "#6f472c",
          800: "#5c3b28",
          900: "#4d3223",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
