<script lang="ts">
  import { Form as FormPrimitive } from "formsnap";

  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<FormPrimitive.Select
  class={cn(
    "h-10 w-full rounded-md px-3 py-2 text-gray-700 border border-gray-200",
    "appearance-none bg-transparent font-normal",
    className
  )}
  {...$$restProps}
>
  <slot />
</FormPrimitive.Select>
<div class="i-lucide-chevron-down absolute right-3 top-2.5 h-4 w-4 opacity-50" />
