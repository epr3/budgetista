<script lang="ts" context="module">
  import Button from "./Button.svelte";

  export const meta = {
    title: "atoms/Button",
    component: Button,
  };
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";

  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<Template let:args>
  <Button {...args} on:click={handleClick}>
    You clicked: {count}
  </Button>
</Template>

<Story name="Primary" args={{ color: "PRIMARY" }} />
<Story name="Secondary" args={{ color: "SECONDARY" }} />
<Story name="Success" args={{ color: "SUCCESS" }} />
<Story name="Error" args={{ color: "ERROR" }} />
