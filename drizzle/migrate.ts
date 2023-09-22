import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { config } from "dotenv";

config();

const sql = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(sql);
async function runMigrations() {
  console.log("Running migrations");

  await migrate(db, { migrationsFolder: "drizzle" });

  console.log("Migrated successfully");

  process.exit(0);
}

runMigrations().catch((e) => {
  console.error("Migration failed");
  console.error(e);
  process.exit(1);
});
