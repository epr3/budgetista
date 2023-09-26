<script lang="ts">
  import IconButton from "$atoms/IconButton/IconButton.svelte";
  import Input from "$atoms/Input/Input.svelte";
  import { Popover, PopoverContent, PopoverTrigger } from "$molecules/Popover";

  export let value: unknown;
</script>

<Popover>
  <div class="flex gap-4 items-center">
    <Input
      bind:value
      {...$$restProps}
      on:blur
      on:change
      on:click
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:mouseover
      on:mouseenter
      on:mouseleave
      on:paste
      on:input
    />
    <PopoverTrigger asChild let:builder>
      <IconButton color="SECONDARY" builders={[builder]}>
        <div class="i-lucide-calendar" />
      </IconButton>
    </PopoverTrigger>
  </div>
  <PopoverContent class="w-80"></PopoverContent>
</Popover>
