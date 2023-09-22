<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";

  import * as Dialog from ".";
</script>

<Dialog.Portal>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg sm:rounded-lg md:w-full"
    {...$$restProps}
  >
    <slot />
    <DialogPrimitive.Close
      class="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-gray-7"
    >
      <div class="i-lucide-x square-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
