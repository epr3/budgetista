<script lang="ts">
  import { Label as LabelPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<LabelPrimitive.Root
  class={cn("mb-0.5 font-medium text-gray-900", className)}
  {...$$restProps}
  on:mousedown
>
  <slot />
</LabelPrimitive.Root>
