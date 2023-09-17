<!-- routes/signup/+page.svelte -->
<script lang="ts">
  import type { PageData } from "./$types";
  import { superForm } from "sveltekit-superforms/client";

  export let data: PageData;

  const { form, enhance, errors, constraints } = superForm(data.form);
</script>

<h1>Sign up</h1>
<form method="post" use:enhance novalidate>
  <label for="nickname">Nickname</label>
  <input name="nickname" id="nickname" bind:value={$form.nickname} {...$constraints.nickname} /><br
  />
  {#if $errors.nickname}<span class="invalid">{$errors.nickname}</span>{/if}<br />
  <label for="email">Email</label>
  <input name="email" id="email" type="email" bind:value={$form.email} {...$constraints.email} /><br
  />
  {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}<br />
  <label for="password">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    bind:value={$form.password}
    {...$constraints.password}
  /><br />
  {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}<br />
  <button type="submit">Submit</button>
</form>
<a href="/login">Sign in</a>
