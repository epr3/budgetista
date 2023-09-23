<script lang="ts">
  import * as Select from "../Select";

  import { getFormField } from "formsnap";

  const { attrStore } = getFormField();
  export let placeholder = "";
</script>

<Select.Trigger {...$$restProps} {...$attrStore} on:click on:keydown>
  <Select.Value {placeholder} />
  <slot />
</Select.Trigger>
