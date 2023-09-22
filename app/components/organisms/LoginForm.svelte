<script lang="ts">
  import type { SuperValidated } from "sveltekit-superforms";
  import { superForm } from "sveltekit-superforms/client";
  import type { RegisterSchema } from "$lib/schemas";
  import Input from "$molecules/Input/Input.svelte";
  import Button from "$atoms/Button/Button.svelte";

  export let data: SuperValidated<RegisterSchema>;

  const { form, errors, enhance, constraints } = superForm(data);
</script>

<form method="POST" class="flex flex-col gap-4" use:enhance novalidate>
  <Input
    name="email"
    label="E-mail"
    type="email"
    placeholder="money@budgetista.xyz"
    errors={$errors.email}
    bind:value={$form.email}
    constraints={$constraints.email}
    fullWidth
  />
  <Input
    name="password"
    label="Password"
    type="password"
    errors={$errors.password}
    bind:value={$form.password}
    constraints={$constraints.password}
    fullWidth
  />
  <p class="text-gray-9 text-right font-semibold">
    Don't have an account? Sign up <a class="text-blue-400 hover:text-blue-700" href="/signup">
      here
    </a>
  </p>
  <Button type="submit" color="SUCCESS">Submit</Button>
</form>
