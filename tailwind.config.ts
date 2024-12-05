import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        headings: "var(--headings)",
        footer: "var(--footer)",
        typograph: "var(--typograph)",
        muted: "var(--muted)",
        brand: "var(--brand)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"], // Makes Inter the default sans font
        londrina: ["var(--font-londrina-solid)"],
        island: ["var(--font-island-moments)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
