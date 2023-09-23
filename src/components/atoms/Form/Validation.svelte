<script lang="ts">
  import { Form as FormPrimitive } from "formsnap";
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<FormPrimitive.Validation
  class={cn("text-sm font-medium text-red-400 h-4", className)}
  {...$$restProps}
/>
