<script lang="ts">
  import { cn } from "$lib/utils";
  import { Button, type Builder } from "bits-ui";

  export let color: "PRIMARY" | "SECONDARY" | "SUCCESS" | "ERROR" = "PRIMARY";
  export let type: "button" | "submit" = "button";
  export let builders: Builder[] = [];

  let className: string | undefined = undefined;

  let theme = "";

  $: switch (color) {
    case "PRIMARY":
      theme = "bg-primary text-white hover:bg-blueGray";
      break;
    case "SECONDARY":
      theme = "bg-secondary text-gray-9 hover:bg-blue";
      break;
    case "SUCCESS":
      theme = "bg-green-500 text-green-100 hover:(text-green-500 bg-green-300)";
      break;
    case "ERROR":
      theme = "bg-red-500 text-red-100 hover:(text-red-500 bg-red-300)";
      break;
    default:
      theme = "bg-primary text-white hover:bg-blueGray";
  }

  export { className as class };
</script>

<Button.Root
  {type}
  class={cn("px-4 py-2 rounded flex items-center justify-center", theme, className)}
  {builders}
  {...$$restProps}
>
  <slot />
</Button.Root>
