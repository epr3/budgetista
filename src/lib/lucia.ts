import { lucia } from "lucia";
import { libsql } from "@lucia-auth/adapter-sqlite";

import { nextjs_future } from "lucia/middleware";

import { client } from "./drizzle";

export const auth = lucia({
  adapter: libsql(client, {
    user: "users",
    key: "user_keys",
    session: "user_sessions",
  }),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs_future(),

  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      email: data.email,
      nickname: data.nickname,
    };
  },
});

export type Auth = typeof auth;
