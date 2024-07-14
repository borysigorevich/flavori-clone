import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-iner)", "sans-serif"],
        sequencia: ["var(--font-sequencia)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
