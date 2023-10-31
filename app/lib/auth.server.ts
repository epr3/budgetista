// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "$lib/session.server";
import { db } from "./drizzle.server";
import { eq } from "drizzle-orm";
import { PassportType, userPassports, users } from "./models";
import { verify } from "./utils.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<{ email: string; isVerified: boolean }>(
  sessionStorage
);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const { email, password } = Object.fromEntries(form);

    console.log("in auth:", email, password);

    const user = await db.query.users.findFirst({
      where: eq(users.email, email as string),
      with: {
        userPassports: {
          where: eq(userPassports.passportType, PassportType.PASSWORD),
        },
      },
    });

    console.log("user:", user);

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    if (user.userPassports.length === 0) {
      throw new Error("Invalid email or password!");
    }

    const ok = await verify(user.userPassports[0].hashedPassword as string, password as string);

    console.log("ok:", ok);

    if (!ok) {
      throw new Error("Invalid email or password!");
    }

    // the type of this user must match the type you pass to the Authenticator
    // the strategy will automatically inherit the type if you instantiate
    // directly inside the `use` method
    return { email: user.email, isVerified: !!user.verifiedAt };
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "email-pass"
);
