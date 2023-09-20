<script lang="ts">
  import IconButton from "$atoms/IconButton/IconButton.svelte";
</script>

<div
  class="absolute bottom-0 w-screen bg-primary text-white lg:h-screen flex justify-center lg:(w-24 flex-col justify-start) items-center gap-4 p-4"
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
</div>
