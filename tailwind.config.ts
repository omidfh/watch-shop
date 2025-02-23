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
    },
  },
  plugins: [],
};
export default config;
