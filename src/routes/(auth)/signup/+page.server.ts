import { fail, redirect } from "@sveltejs/kit";
import { db, schema } from "$lib";
import { superValidate } from "sveltekit-superforms/server";

import bcrypt from "bcrypt";

import type { Actions, PageServerLoad } from "./$types";

import { registerSchema } from "$lib/schemas";
import { PassportType, TokenType } from "$lib/models";

export const load: PageServerLoad = async () => {
  // Server API:
  const form = await superValidate(registerSchema);

  // Always return { form } in load and form actions.
  return { registerForm: form };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, registerSchema);
    const { nickname, email, password } = form.data;

    // Convenient validation check:
    if (!form.valid) {
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }

    try {
      await db.transaction(async (tx) => {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const token = await bcrypt.hash(email, 10);

        const user = await tx.insert(schema.users).values({ nickname, email }).returning();

        await tx.insert(schema.userPassports).values({
          passportType: PassportType.PASSWORD,
          hashedPassword,
          userId: user[0].id,
        });

        await tx.insert(schema.tokens).values({ email, tokenType: TokenType.VALIDATION, token });

        return user[0];
      });
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
    throw redirect(302, "/signup/success");
  },
};
