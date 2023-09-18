<script lang="ts">
  import type { InputConstraint } from "sveltekit-superforms";

  import { createLabel, melt } from "@melt-ui/svelte";

  const {
    elements: { root },
  } = createLabel();

  export let label: string;
  export let value: string;
  export let name: string;
  export let fullWidth: boolean = false;
  export let placeholder = "";
  export let type: "text" | "email" | "password" = "text";
  export let errors: string[] | undefined = undefined;
  export let constraints: InputConstraint | undefined = undefined;

  const handleInput = (event: Event) => {
    value = (event.target as HTMLInputElement).value;
  };
</script>

<div class="flex flex-col gap-2 items-start justify-center">
  <label use:melt={$root} for={name} class="mb-0.5 font-medium text-gray-900" data-melt-part="root">
    <span>{label}</span>
  </label>
  <input
    {type}
    id={name}
    {name}
    class="h-10 min-w-[240px] rounded-md px-3 py-2 text-gray-700 border border-gray-200"
    class:border-red-500={errors}
    class:w-full={fullWidth}
    aria-invalid={errors ? "true" : undefined}
    {placeholder}
    {value}
    on:input={handleInput}
    {...constraints}
  />

  <span class="text-red-500" class:invisible={!errors} class:visible={errors}>{errors}</span>
</div>
