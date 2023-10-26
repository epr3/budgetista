import { auth } from "@/lib/lucia";
import { LibsqlError } from "@libsql/client";

import { createId } from "@paralleldrive/cuid2";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed!" });
  }

  const { email, password, nickname } = req.body;

  try {
    await auth.createUser({
      userId: createId(),
      key: {
        providerId: "email", // auth method
        providerUserId: email, // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        email,
        nickname,
      },
    });

    res.redirect(302, "/signup/success");
  } catch (e) {
    console.error(e);
    // this part depends on the database you're using
    // check for unique constraint error in user table
    if (e instanceof LibsqlError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      res.status(400).json({
        error: "Could not create user account",
      });
    }

    res.status(500).json({
      error: "An unknown error occurred",
    });
  }
};

export default handler;
