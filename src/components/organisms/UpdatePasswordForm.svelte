<script lang="ts">
  import type { SuperValidated } from "sveltekit-superforms";

  import * as Form from "$atoms/Form";

  import { updatePasswordSchema, type UpdatePasswordSchema } from "$lib/schemas";

  export let form: SuperValidated<UpdatePasswordSchema>;
</script>

<Form.Root
  class="flex flex-col gap-4"
  method="POST"
  action="/profile?/password"
  {form}
  schema={updatePasswordSchema}
  let:config
>
  <Form.Field {config} name="oldPassword">
    <Form.Item>
      <Form.Label>Old Password</Form.Label>
      <Form.Input type="password" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="newPassword">
    <Form.Item>
      <Form.Label>New Password</Form.Label>
      <Form.Input type="password" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>
