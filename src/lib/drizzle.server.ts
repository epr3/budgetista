import { drizzle } from "drizzle-orm/libsql";
import { DATABASE_URL, DATABASE_AUTH_TOKEN } from "$env/static/private";

import { schema } from "./models";

import { createClient } from "@libsql/client/http";

const client = createClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });

// for query purposes
export const db = drizzle(client, {
  schema,
});
