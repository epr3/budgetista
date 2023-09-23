<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  type $$Props = SelectPrimitive.Props;

  export let selected: $$Props["selected"] = undefined;
  export let open: boolean | undefined = undefined;
</script>

<SelectPrimitive.Root bind:selected bind:open {...$$restProps}>
  <slot />
</SelectPrimitive.Root>
