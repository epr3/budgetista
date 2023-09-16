// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup()],
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: "Lato",
            weights: ["200", "300", "400", "500", "600", "700", "800"],
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#262935",
      secondary: "#f7f6f2",
      accent: "#91c751",
      accent2: "#0588fd",
    },
  },
});
