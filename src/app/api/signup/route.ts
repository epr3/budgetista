import { auth } from "@/lib/lucia";
import { LibsqlError } from "@libsql/client";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  try {
    await auth.createUser({
      key: {
        providerId: "username", // auth method
        providerUserId: data.email, // unique id when using "username" auth method
        password: data.password, // hashed by Lucia
      },
      attributes: {
        email: data.email,
        nickname: data.nickname,
      },
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/signup/success", // redirect to profile page
      },
    });
  } catch (e) {
    console.error(e);
    // this part depends on the database you're using
    // check for unique constraint error in user table
    if (e instanceof LibsqlError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return NextResponse.json(
        {
          error: "Could not create user account",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error: "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
};
