<script lang="ts">
  import IconButton from "$atoms/IconButton/IconButton.svelte";
  import Dialog from "./Dialog.svelte";
</script>

<div
  class="fixed bottom-0 w-screen bg-primary text-white lg:h-screen flex justify-center lg:(static w-24 flex-col justify-start) items-center gap-4 p-4"
>
  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-home square-10" />
  </IconButton>

  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-user square-10" />
  </IconButton>

  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-receipt square-10" />
  </IconButton>

  <Dialog let:open>
    <IconButton href="/" color="SECONDARY" on:click={() => open()}>
      <div class="i-lucide-plus square-10" />
    </IconButton>
  </Dialog>
</div>
