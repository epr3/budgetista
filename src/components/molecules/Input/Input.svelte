<script lang="ts">
  import { createLabel, melt } from "@melt-ui/svelte";

  const {
    elements: { root },
  } = createLabel();

  export let label: string;
  export let value: string;
  export let name: string;
  export let placeholder = "";
  export let type: "text" | "email" | "password" = "text";
  export let error = "";
</script>

<form>
  <div class="flex flex-col items-start justify-center">
    <label
      use:melt={$root}
      for={name}
      class="mb-0.5 font-medium text-gray-900"
      data-melt-part="root"
    >
      <span>{label}</span>
    </label>
    <input
      {type}
      id={name}
      {name}
      class="h-10 w-[240px] rounded-md px-3 py-2 text-gray-700 border border-gray-200"
      class:border-red-500={!!error}
      {placeholder}
      {value}
    />
    {#if error}
      <span class="text-red-500">{error}</span>
    {/if}
  </div>
</form>
