<script lang="ts">
  export let color: "PRIMARY" | "SECONDARY" | "SUCCESS" | "ERROR" = "PRIMARY";

  let theme = "";

  $: switch (color) {
    case "PRIMARY":
      theme = "bg-primary text-white hover:bg-blueGray";
      break;
    case "SECONDARY":
      theme = "bg-secondary text-gray-9 hover:bg-blue";
      break;
    case "SUCCESS":
      theme = "bg-green text-black hover:bg-green-300";
      break;
    case "ERROR":
      theme = "bg-red text-black hover:bg-red-300";
      break;
    default:
      theme = "bg-primary text-white hover:bg-blueGray";
  }
</script>

<button class="px-4 py-2 rounded font-medium {theme}" on:click><slot /></button>
