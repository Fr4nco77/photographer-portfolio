// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://neophotographer-portfolio.vercel.app",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true
    }
  },

  adapter: vercel()
});