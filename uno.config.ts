// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, presetIcons } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  presets: [
    presetIcons({}),
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
  shortcuts: [[/^square-(.*)$/, ([, c]) => `w-${c} h-${c}`]],
  theme: {
    colors: {
      primary: "#262935",
      secondary: "#f7f6f2",
      accent: "#91c751",
      accent2: "#0588fd",
    },
  },
});
