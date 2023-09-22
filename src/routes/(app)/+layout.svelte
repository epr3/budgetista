<script lang="ts">
  import Navbar from "$organisms/Navbar.svelte";
</script>

<div class="grid grid-rows-[1fr_6rem] lg:(grid-rows-1 grid-cols-[6rem_1fr])">
  <Navbar />
  <div>
    <slot />
  </div>
</div>
