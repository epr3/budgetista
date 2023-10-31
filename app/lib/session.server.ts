import { createCookieSessionStorage } from "@remix-run/node";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "budgetista_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.COOKIE_SECRET as string],
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
