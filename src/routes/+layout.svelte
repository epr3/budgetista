<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "uno.css";

  // import { getFlash } from "sveltekit-flash-message";
  // import { page } from "$app/stores";

  // import Toast from "$molecules/Toast/Toast.svelte";
  // import { addToast } from "$molecules/Toast/Toast.svelte";

  // const flash = getFlash(page);

  // flash.subscribe(($flash) => {
  //   if (!$flash) return;

  //   addToast({
  //     data: {
  //       title: $flash.type,
  //       description: $flash.message,
  //     },
  //   });

  //   // Clearing the flash message could sometimes
  //   // be required here to avoid double-toasting.
  //   flash.set(undefined);
  // });

  // import { onMount } from "svelte";

  // import { pwaInfo } from "virtual:pwa-info";

  // onMount(async () => {
  //   if (pwaInfo) {
  //     const { registerSW } = await import("virtual:pwa-register");
  //     registerSW({
  //       immediate: true,
  //       onRegistered(r) {
  //         // uncomment following code if you want check for updates
  //         // r && setInterval(() => {
  //         //    console.log('Checking for sw update')
  //         //    r.update()
  //         // }, 20000 /* 20s for testing purposes */)
  //         console.log(`SW Registered: ${r}`);
  //       },
  //       onRegisterError(error: unknown) {
  //         console.log("SW registration error", error);
  //       },
  //     });
  //   }
  // });

  // $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<!--
<svelte:head>
  {@html webManifest}
</svelte:head> -->

<!-- <Toast></Toast> -->

<slot />

<!-- {#await import("$lib/ReloadPrompt.svelte") then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await} -->
