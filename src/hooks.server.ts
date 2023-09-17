import { handleSession } from "svelte-kit-cookie-session";
import { COOKIE_SECRET } from "$env/static/private";

export const handle = handleSession({
  // Optional initial state of the session, default is an empty object {}
  // init: (event) => ({
  // 	views: 0
  // }),
  // chunked: true // Optional, default is false - if true, the session will be chunked into multiple cookies avoiding the browser limit for cookies
  secret: COOKIE_SECRET,
});
