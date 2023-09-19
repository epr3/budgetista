import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
  if (!locals.session.data.email || !locals.session.data.isVerified) {
    throw redirect(302, "/login");
  }

  return {
    session: locals.session.data,
  };
};