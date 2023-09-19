import { fail, redirect } from "@sveltejs/kit";
import { prisma } from "$lib";
import { superValidate } from "sveltekit-superforms/server";
import { setFlash } from "sveltekit-flash-message/server";

import bcrypt from "bcrypt";

import type { Actions, PageServerLoad } from "./$types";
import { PASSPORT_TYPE } from "@prisma/client";

import { loginSchema } from "$lib/schemas";

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
      const user = await prisma.user.findFirstOrThrow({
        where: {
          email,
        },
        include: {
          userPassports: {
            where: {
              passportType: PASSPORT_TYPE.PASSWORD,
            },
          },
        },
      });

      if (!user.verifiedAt) {
        setFlash(
          { type: "ERROR", message: "Please verify your email" },
          { request, locals, ...rest }
        );
        return fail(400);
      }

      const ok = await bcrypt.compare(password, user.userPassports[0].hashedPassword!);

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
