import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";

import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      /* pwa options */
    }),
    UnoCSS(),
  ],
});
