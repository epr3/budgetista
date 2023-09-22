import { drizzle } from "drizzle-orm/libsql";

import { schema } from "./models";

import { createClient } from "@libsql/client/http";

const client = createClient({
  url: process.env.DATABASE_URL as string,
  authToken: process.env.DATABASE_AUTH_TOKEN as string,
});

// for query purposes
export const db = drizzle(client, {
  schema,
});
