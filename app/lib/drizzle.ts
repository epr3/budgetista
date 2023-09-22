import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";

import { schema } from "./models";

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(queryClient, {
  schema,
});
