<script lang="ts">
  import type { SuperValidated } from "sveltekit-superforms";

  import * as Form from "$atoms/Form";

  import { registerSchema, type RegisterSchema } from "$lib/schemas";

  export let form: SuperValidated<RegisterSchema>;
</script>

<Form.Root class="flex flex-col gap-4" method="POST" {form} schema={registerSchema} let:config>
  <Form.Field {config} name="email">
    <Form.Item>
      <Form.Label>E-mail</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="nickname">
    <Form.Item>
      <Form.Label>Nickname</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="password">
    <Form.Item>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>
