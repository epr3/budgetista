import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/models.ts",
  out: "./drizzle",
  driver: "pg",
} satisfies Config;
