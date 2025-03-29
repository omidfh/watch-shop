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
        background1: "#000000",
        background2: "#3D0000",
        background3: "#950101",
        background4: "#FF0000",
        foreground: "var(--foreground)",
      },
      keyframes: {
        write: {
          "0%, 100%": { transform: "translateX(0) rotate(-10deg)" },
          "50%": { transform: "translateX(90%) rotate(10deg)" },
        },
      },
      animation: {
        write: "write 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
