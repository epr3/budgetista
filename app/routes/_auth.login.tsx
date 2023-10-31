import { type ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno

import { LoginForm } from "$organisms/LoginForm";
// import { loginSchema } from "$lib/schemas";
import { authenticator } from "$lib/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  // const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const formData = await request.formData();

  // const { email, password } = Object.fromEntries(formData);

  return await authenticator.authenticate("email-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    context: { formData },
  });
}
export default function Login() {
  return (
    <div className="flex flex-col gap-12 h-full lg:gap-72 lg:w-1/2 lg:pr-12">
      <h1 className="text-accent2 font-bold text-5xl uppercase">Login</h1>

      <LoginForm />
    </div>
  );
}
