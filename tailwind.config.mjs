/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        muted: "#6f766f",
        paper: "#f7f3ea",
        brand: "#4f5d4f",
        accent: "#c8843e",
        steel: "#d8d2c4"
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        calm: "0.08em"
      }
    }
  },
  plugins: []
};
