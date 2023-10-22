import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/models.ts",
  out: "./drizzle/migrations",
  breakpoints: true,
  driver: "turso",
  dbCredentials: {
    url: "file:./local.db",
  },
} satisfies Config;
