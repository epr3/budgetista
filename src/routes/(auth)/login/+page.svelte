<script lang="ts">
  import LoginForm from "$organisms/LoginForm.svelte";
  import type { PageData } from "./$types";
  import { getFlash } from "sveltekit-flash-message";
  import { page } from "$app/stores";

  export let data: PageData;

  const flash = getFlash(page);
</script>

{#if $flash}
  {@const bg = $flash.type == "SUCCESS" ? "#3D9970" : "#FF4136"}
  <div style:background-color={bg} class="flash">{$flash.message}</div>
{/if}
<div class="flex flex-col gap-12 h-full lg:(gap-72 w-1/2 pr-12)">
  <h1 class="text-accent2 font-bold text-5xl uppercase">Login</h1>

  <LoginForm data={data.loginForm} />
</div>
