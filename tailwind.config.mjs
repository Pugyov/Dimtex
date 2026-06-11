/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#6b7280",
        paper: "#f6f7f9",
        brand: "#12355b",
        accent: "#9f1239",
        steel: "#d9dde4"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Instrument Sans'", "sans-serif"]
      },
      letterSpacing: {
        calm: "0.08em"
      }
    }
  },
  plugins: []
};
