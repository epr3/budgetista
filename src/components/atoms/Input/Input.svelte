<script lang="ts">
  import { cn } from "$lib/utils";

  export let value: unknown;
  export let fullWidth: boolean = false;
  export let placeholder = "";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<input
  class={cn(
    "h-10 min-w-[240px] rounded-md px-3 py-2 text-gray-700 border border-gray-200",
    className
  )}
  class:w-full={fullWidth}
  {placeholder}
  bind:value
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
  on:input
  {...$$restProps}
/>
