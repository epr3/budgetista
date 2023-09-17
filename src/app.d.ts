// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Session } from "svelte-kit-cookie-session";
import type { User } from "@prisma/client";

import "vite-plugin-pwa/info";
import "vite-plugin-pwa/svelte";

type SessionData = {
  user: User;
};

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      session: Session<SessionData>;
    }
    interface PageData {
      session: SessionData;
    }
    // interface Platform {}
  }
}

export {};
