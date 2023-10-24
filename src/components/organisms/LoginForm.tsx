"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { Button } from "@/components/atoms/Button/Button";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  Form,
} from "@/components/molecules/Form/Form";
import { Input } from "@/components/molecules/Input/Input";

import { loginSchema } from "@/lib/schemas";
import * as z from "zod";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          Don&apos;t have an account? Sign up{" "}
          <Link className="text-blue-400 hover:text-blue-700" href="/signup">
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
