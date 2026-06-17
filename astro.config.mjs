import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://dimtex.bg",
  output: "static",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => !page.includes("/contact-success/")
    })
  ]
});
