import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { setFlash } from "sveltekit-flash-message/server";

import bcrypt from "bcrypt";

import type { Actions, PageServerLoad } from "./$types";
import { db, schema } from "$lib";

import { PassportType } from "$lib/models";

import { loginSchema } from "$lib/schemas";
import { eq, and } from "drizzle-orm";

export const load: PageServerLoad = async () => {
  // Server API:
  const form = await superValidate(loginSchema);

  // Always return { form } in load and form actions.
  return { loginForm: form };
};

export const actions: Actions = {
  default: async ({ request, locals, ...rest }) => {
    const form = await superValidate(request, loginSchema);
    const { email, password } = form.data;

    // Convenient validation check:
    if (!form.valid) {
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }

    try {
      const user = await db.query.users.findFirst({
        where: eq(schema.users.email, email),
      });

      if (!user || !user.verifiedAt) {
        setFlash(
          { type: "ERROR", message: "Please verify your email" },
          { request, locals, ...rest }
        );
        return fail(400);
      }

      const userPassport = await db.query.userPassports.findFirst({
        where: and(
          eq(schema.userPassports.userId, user.id),
          eq(schema.userPassports.passportType, PassportType.PASSWORD)
        ),
      });

      if (!userPassport) {
        setFlash(
          { type: "ERROR", message: "Invalid email or password" },
          { request, locals, ...rest }
        );
        return fail(400);
      }

      const ok = await bcrypt.compare(password, userPassport.hashedPassword!);

      if (!ok) {
        setFlash(
          { type: "ERROR", message: "Invalid email or password" },
          { request, locals, ...rest }
        );
        return fail(400);
      }

      await locals.session.set({ email: user.email, isVerified: !!user.verifiedAt });
    } catch (e) {
      // this part depends on the database you're using
      // check for unique constraint error in user table
      console.error(e);
      // if (e instanceof SomeDatabaseError && e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR) {
      //   return fail(400, {
      //     message: "Username already taken",
      //   });
      // }
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
    // redirect to
    // make sure you don't throw inside a try/catch block!
    throw redirect(302, "/");
  },
};
