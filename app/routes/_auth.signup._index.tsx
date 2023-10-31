import { json, redirect, type ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno

import { LibsqlError } from "@libsql/client";
// import { registerSchema } from "$lib/schemas";
import { RegisterForm } from "$organisms/RegisterForm";
import { db } from "$lib/drizzle.server";
import { userPassports, users, PassportType } from "$lib/models";
import { hash } from "$lib/utils.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const { email, password, nickname } = Object.fromEntries(formData);

  try {
    await db.transaction(async (tx) => {
      console.log("transaction start");
      const user = await tx
        .insert(users)
        .values({
          email: email as string,
          nickname: nickname as string,
        })
        .returning();
      console.log(user);
      const hashedPassword = await hash(password as string);

      await tx.insert(userPassports).values({
        hashedPassword,
        passportType: PassportType.PASSWORD,
        userId: user[0].id,
      });
    });

    return redirect("/signup/success");
  } catch (e) {
    console.error(e);
    // this part depends on the database you're using
    // check for unique constraint error in user table
    if (e instanceof LibsqlError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return json({
        error: "Could not create user account",
      });
    }

    return json({
      error: "An unknown error occurred",
    });
  }
}
export default function Register() {
  return (
    <div className="flex flex-col gap-12 h-full lg:gap-72 lg:w-1/2 lg:pr-12">
      <h1 className="text-accent2 font-bold text-5xl uppercase">Sign Up</h1>

      <RegisterForm />
    </div>
  );
}
