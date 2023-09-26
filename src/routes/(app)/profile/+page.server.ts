import { profileSchema, updatePasswordSchema, categorySchema } from "$lib/schemas";
import { superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import bcrypt from "bcrypt";
import { fail } from "@sveltejs/kit";
import { setFlash } from "sveltekit-flash-message/server";
import { db, schema } from "$lib";
import { and, eq } from "drizzle-orm";
import { PassportType } from "$lib/models";

export const load: PageServerLoad = async ({ request, locals, ...rest }) => {
  const user = await db.query.users.findFirst({
    where: eq(schema.users.id, locals.session.data.id),
  });

  if (!user) {
    setFlash({ type: "ERROR", message: "User not found" }, { request, locals, ...rest });
    return fail(500);
  }
  // Server API:
  const profileForm = await superValidate(
    { email: user.email, nickname: user.nickname },
    profileSchema
  );
  const updatePasswordForm = await superValidate(updatePasswordSchema);
  const categoryForm = await superValidate(categorySchema);

  // Always return { form } in load and form actions.
  return { profileForm, updatePasswordForm, categoryForm };
};

export const actions: Actions = {
  update: async ({ request, locals, ...rest }) => {
    // Server API:
    const form = await superValidate(request, profileSchema);

    // Convenient validation check:
    if (!form.valid) {
      setFlash({ type: "ERROR", message: "Invalid data" }, { request, locals, ...rest });
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }
    try {
      await db.update(schema.users).set({
        nickname: form.data.nickname,
        email: form.data.email,
      });
      await locals.session.set({ ...locals.session.data, email: form.data.email });
      setFlash({ type: "SUCCESS", message: "Profile updated" }, { request, locals, ...rest });
      return { form };
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
        form,
      });
    }
  },
  password: async ({ request, locals, ...rest }) => {
    // Server API:
    const form = await superValidate(request, updatePasswordSchema);

    // Convenient validation check:
    if (!form.valid) {
      setFlash({ type: "ERROR", message: "Invalid data" }, { request, locals, ...rest });
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }

    try {
      const userPassport = await db.query.userPassports.findFirst({
        where: and(
          eq(schema.userPassports.userId, locals.session.data.id),
          eq(schema.userPassports.passportType, PassportType.PASSWORD)
        ),
      });

      if (!userPassport) {
        setFlash({ type: "ERROR", message: "Invalid old password" }, { request, locals, ...rest });
        return fail(400, { form });
      }

      const ok = await bcrypt.compare(form.data.oldPassword, userPassport.hashedPassword!);

      if (!ok) {
        setFlash({ type: "ERROR", message: "Invalid old password" }, { request, locals, ...rest });
        return fail(400, { form });
      }
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
        form,
      });
    }

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(form.data.newPassword, salt);

      await db.update(schema.userPassports).set({
        hashedPassword,
      });
      setFlash({ type: "SUCCESS", message: "Password updated" }, { request, locals, ...rest });
      return { form };
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
        form,
      });
    }
  },
};
