<script lang="ts">
  export let color: "PRIMARY" | "SECONDARY" | "SUCCESS" | "ERROR" = "PRIMARY";
  export let type: "button" | "submit" = "button";
  export let href: string;

  let theme = "";

  $: switch (color) {
    case "PRIMARY":
      theme = "bg-primary text-white hover:bg-blueGray";
      break;
    case "SECONDARY":
      theme = "bg-secondary text-gray-9 hover:(bg-blue text-white)";
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
</script>

{#if href}
  <a class="square-20 rounded flex items-center justify-center {theme}" {href}><slot /></a>
{:else}
  <button class="square-20 rounded {theme}" {type} on:click><slot /></button>
{/if}
