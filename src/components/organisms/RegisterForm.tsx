"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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

import { registerSchema } from "@/lib/schemas";
import * as z from "zod";

const RegisterForm = () => {
  const router = useRouter();

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
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(values),
      redirect: "manual",
    });
    console.log(response.status);
    if (response.status === 0) {
      // redirected
      // when using `redirect: "manual"`, response status 0 is returned
      return router.push("/signup/success");
    }
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
          <Link className="text-blue-400 hover:text-blue-700" href="/login">
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
