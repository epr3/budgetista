import { Form, Link, useActionData } from "@remix-run/react";
import { useForm } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import { Button } from "$atoms/Button/Button";
import { FormItem, FormLabel, FormControl, FormMessage } from "$molecules/Form/Form";
import { Input } from "$molecules/Input/Input";

import { loginSchema } from "$lib/schemas";
import type { action } from "$routes/_auth.login";

const LoginForm = () => {
  const lastSubmission = useActionData<typeof action>();

  // The `useForm` hook will return everything you need to setup a form
  // including the error and config of each field
  const [form, fields] = useForm({
    // The last submission will be used to report the error and
    // served as the default value and initial error of the form
    // for progressive enhancement
    lastSubmission,

    // Validate the field once a `blur` event is triggered
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: loginSchema });
    },
  });

  return (
    <Form method="POST" action="/login" {...form.props} className="flex flex-col gap-4">
      <FormItem error={fields.email.error}>
        <FormLabel>E-mail</FormLabel>
        <FormControl>
          <Input
            name="email"
            type="email"
            placeholder="money@budgetista.xyz"
            defaultValue={fields.email.defaultValue}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
      <FormItem error={fields.password.error}>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input name="password" type="password" />
        </FormControl>
        <FormMessage />
      </FormItem>
      <p className="text-gray-9 text-right font-semibold">
        Don't have an account? Sign up{" "}
        <Link className="text-blue-400 hover:text-blue-700" to="/signup">
          here
        </Link>
      </p>
      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
};

export { LoginForm };
