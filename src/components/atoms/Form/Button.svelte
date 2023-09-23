<script lang="ts">
  import Button from "$atoms/Button/Button.svelte";
</script>

<Button color="PRIMARY" type="submit" {...$$restProps} on:click on:keydown>
  <slot />
</Button>
