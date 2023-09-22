<script lang="ts" context="module">
  export type ToastData = {
    title: "SUCCESS" | "ERROR";
    description: string;
  };

  const {
    elements: { content, title, description, close },
    helpers,
    states: { toasts },
    actions: { portal },
  } = createToaster<ToastData>();

  export const addToast = helpers.addToast;
</script>

<script lang="ts">
  import { createToaster, melt } from "@melt-ui/svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
</script>

<div
  class="fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-0 md:top-auto"
  use:portal
>
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      animate:flip={{ duration: 500 }}
      in:fly={{ duration: 150, x: "100%" }}
      out:fly={{ duration: 150, x: "100%" }}
      class="rounded-lg bg-secondary text-gray-900 shadow-md"
    >
      <div
        class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5"
      >
        <div>
          <h3 use:melt={$title(id)} class="flex items-center gap-2 font-semibold">
            {data.title}
            <span
              class="rounded-full square-1.5"
              class:bg-green-500={data.title === "SUCCESS"}
              class:bg-red-500={data.title === "ERROR"}
            />
          </h3>
          <div use:melt={$description(id)}>
            {data.description}
          </div>
        </div>

        <div
          class="i-lucide-x cursor-pointer text-gray-900 font-bold absolute right-4 top-4 square-6"
          use:melt={$close(id)}
        />
      </div>
    </div>
  {/each}
</div>
