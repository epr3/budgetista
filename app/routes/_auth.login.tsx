import { json, redirect, type ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { parse } from "@conform-to/zod";

import { LoginForm } from "$organisms/LoginForm";
import { loginSchema } from "$lib/schemas";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Replace `Object.fromEntries()` with the parse function
  const submission = parse(formData, { schema: loginSchema });

  // Report the submission to client
  // 1) if the intent is not `submit`, or
  // 2) if there is any error
  if (submission.intent !== "submit" || !submission.value) {
    return json(submission);
  }

  return redirect("/");
}
export default function Login() {
  return (
    <div className="flex flex-col gap-12 h-full lg:gap-72 lg:w-1/2 lg:pr-12">
      <h1 className="text-accent2 font-bold text-5xl uppercase">Login</h1>

      <LoginForm />
    </div>
  );
}
