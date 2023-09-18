<script lang="ts" context="module">
  import Input from "./Input.svelte";

  export const meta = {
    title: "molecules/Input",
    component: Input,
  };
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Input {...args} />
</Template>

<Story name="Default" args={{ value: "", name: "email", type: "email", label: "Email" }} />
<Story
  name="Error"
  args={{ value: "", name: "email", type: "email", label: "Email", errors: ["Email is invalid"] }}
/>
