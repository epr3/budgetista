<script lang="ts">
  import Button from "$atoms/Button/Button.svelte";
  import { createModal } from "@grail-ui/svelte";
  import { scale } from "svelte/transition";

  const { useModal, modalAttrs, titleAttrs, triggerAttrs, open } = createModal({
    dismissible: true,
  });
</script>

<slot {...$triggerAttrs} open={() => ($open = true)} />

{#if $open}
  <div
    use:useModal
    {...$modalAttrs}
    transition:scale={{ duration: 200 }}
    class="absolute my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
  >
    <h3 {...$titleAttrs} class="text-lg font-medium leading-6 text-gray-900">Payment successful</h3>
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email with all of the
        details of your order.
      </p>
    </div>

    <div class="mt-4">
      <Button type="button" on:click={() => ($open = false)} color="PRIMARY">
        Got it, thanks!</Button
      >
    </div>
  </div>
{/if}
