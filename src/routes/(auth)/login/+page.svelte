<script lang="ts">
  import LoginForm from "$organisms/LoginForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex flex-col gap-12 h-full lg:(gap-72 w-1/2 pr-12)">
  <h1 class="text-accent2 font-bold text-5xl uppercase">Login</h1>

  <LoginForm form={data.loginForm} />
</div>
