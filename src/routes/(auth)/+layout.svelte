<script lang="ts">
  import bg from "$lib/assets/auth-bg.svg";
</script>

<div class="hidden lg:block absolute h-screen w-1/2 right-0 top-0">
  <img class="-z-1 w-full h-full object-cover" src={bg} alt="background" />
  <h2 class="absolute text-accent text-5xl top-1/2 text-center w-full">Budgetista</h2>
</div>
<div class="p-12 h-screen">
  <slot />
</div>
