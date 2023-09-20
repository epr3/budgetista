import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { db, schema } from "$lib";
import { eq } from "drizzle-orm";

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.session.data.email || !locals.session.data.isVerified) {
    // TODO: create informative route for unverified users
    throw redirect(302, "/login");
  }

  const user = await db.query.users.findFirst({
    where: eq(schema.users.email, locals.session.data.email),
  });

  if (!user) {
    await locals.session.destroy();
    throw redirect(302, "/login");
  }

  return {
    session: locals.session.data,
  };
};
