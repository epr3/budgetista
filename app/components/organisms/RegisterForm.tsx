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

import { registerSchema } from "$lib/schemas";

import type * as z from "zod";

const RegisterForm = () => {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    submit(values, {
      action: "/signup",
      method: "POST",
      replace: true,
    });
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nickname" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          Already have an account? Sign in{" "}
          <Link className="text-blue-400 hover:text-blue-700" to="/login">
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

export { RegisterForm };
