<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";

  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;
  export let value: unknown;
  export let label: string | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export { className as class };
</script>

<SelectPrimitive.Item
  {value}
  {disabled}
  {label}
  class={cn(
    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
>
  <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <SelectPrimitive.ItemIndicator>
      <div class="i-lucide-check square-4" />
    </SelectPrimitive.ItemIndicator>
  </span>
  <slot />
</SelectPrimitive.Item>
