import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fde047",
          secondary: "#38bdf8",
          accent: "#d946ef",
          neutral: "#141a1f",
          "base-100": "#111827",
          info: "#22d3ee",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
