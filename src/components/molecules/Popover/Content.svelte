<script lang="ts">
  import { Popover as PopoverPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;

  export { className as class };
</script>

<PopoverPrimitive.Content
  class={cn(
    "z-50 w-72 rounded-md border bg-primary p-4 text-white shadow-md outline-none",
    className
  )}
  {...$$restProps}
>
  <slot />
</PopoverPrimitive.Content>
