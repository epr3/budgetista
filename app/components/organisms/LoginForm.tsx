import { Link, useSubmit } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "$atoms/Button/Button";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  Form,
} from "$molecules/Form/Form";
import { Input } from "$molecules/Input/Input";

import { loginSchema } from "$lib/schemas";

import type * as z from "zod";

const LoginForm = () => {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    submit(values, {
      action: "/login",
      method: "POST",
      replace: true,
    });
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} placeholder="money@budgetista.xyz" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-gray-9 text-right font-semibold">
          Don't have an account? Sign up{" "}
          <Link className="text-blue-400 hover:text-blue-700" to="/signup">
            here
          </Link>
        </p>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export { LoginForm };
