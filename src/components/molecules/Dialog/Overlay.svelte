<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";

  import { fade } from "svelte/transition";
</script>

<DialogPrimitive.Overlay
  transition={fade}
  transitionConfig={{ duration: 150 }}
  class="fixed inset-0 z-50 bg-black opacity-30 backdrop-blur-sm"
  {...$$restProps}
/>
