<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<SelectPrimitive.Content
  class={cn(
    "relative z-70 min-w-[8rem] overflow-hidden rounded-md border bg-white text-primary-foreground shadow-md outline-none",
    className
  )}
  {...$$restProps}
  on:keydown
>
  <div class="w-full p-1">
    <slot />
  </div>
</SelectPrimitive.Content>
