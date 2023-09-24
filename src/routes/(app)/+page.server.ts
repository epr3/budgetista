import { addTransactionSchema } from "$lib/schemas";
import { superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";

import { fail } from "@sveltejs/kit";
import { setFlash } from "sveltekit-flash-message/server";

export const load: PageServerLoad = async () => {
  // Server API:
  const form = await superValidate(addTransactionSchema);

  // Always return { form } in load and form actions.
  return { transactionForm: form };
};

export const actions: Actions = {
  default: async ({ request, locals, ...rest }) => {
    const form = await superValidate(request, addTransactionSchema);

    // Convenient validation check:
    if (!form.valid) {
      setFlash({ type: "ERROR", message: "Invalid data" }, { request, locals, ...rest });
      // Again, always return { form } and things will just work.
      return fail(422, { form });
    }

    try {
      console.log(form.data);
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
      });
    }
  },
};
