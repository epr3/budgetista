import { fail, redirect } from "@sveltejs/kit";
import { prisma } from "$lib";
import { superValidate } from "sveltekit-superforms/server";

import bcrypt from "bcrypt";

import type { Actions, PageServerLoad } from "./$types";
import { PASSPORT_TYPE, TOKEN_TYPE } from "@prisma/client";

import { registerSchema } from "$lib/schemas";

export const load: PageServerLoad = async () => {
  // Server API:
  const form = await superValidate(registerSchema);

  // Always return { form } in load and form actions.
  return { registerForm: form };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, registerSchema);
    const { nickname, email, password } = form.data;

    // Convenient validation check:
    if (!form.valid) {
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }

    try {
      const user = await prisma.$transaction(async (tx) => {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const token = await bcrypt.hash(email, 10);

        const user = await tx.user.create({
          data: {
            nickname,
            email,
          },
        });
        await tx.userPassport.create({
          data: {
            passportType: PASSPORT_TYPE.PASSWORD,
            hashedPassword,
            userId: user.id,
          },
        });

        await tx.token.create({
          data: {
            email: user.email,
            tokenType: TOKEN_TYPE.VALIDATION,
            token,
          },
        });

        return user;
      });

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
