import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { DATABASE_URL } from "$env/static/private";

import { schema } from "./models";

// for query purposes
const queryClient = postgres(DATABASE_URL);
export const db = drizzle(queryClient, {
  schema,
});
