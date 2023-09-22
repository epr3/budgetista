import type { Config } from "drizzle-kit";

export default {
  schema: "./app/lib/models.ts",
  out: "./drizzle/migrations",
  breakpoints: true,
} satisfies Config;
