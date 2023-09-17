// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Session } from "svelte-kit-cookie-session";

import "vite-plugin-pwa/info";
import "vite-plugin-pwa/svelte";

type SessionData = {
  email: string;
  isVerified: boolean;
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
