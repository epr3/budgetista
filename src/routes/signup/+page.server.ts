import { fail, redirect } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import bcrypt from "bcrypt";

import type { Actions } from "./$types";
import { PASSPORT_TYPE, TOKEN_TYPE } from "@prisma/client";

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const nickname = formData.get("nickname");
    const password = formData.get("password");

    if (typeof email !== "string" || email.length < 4) {
      return fail(400, {
        message: "Invalid email",
      });
    }

    if (typeof nickname !== "string" || nickname.length < 4 || nickname.length > 31) {
      return fail(400, {
        message: "Invalid nickname",
      });
    }

    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
      return fail(400, {
        message: "Invalid password",
      });
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

      await locals.session.set({ user });
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
