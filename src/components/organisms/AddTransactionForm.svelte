<script lang="ts">
  import type { SuperValidated } from "sveltekit-superforms";
  import { createEventDispatcher } from "svelte";

  import * as Form from "$atoms/Form";

  import { addTransactionSchema, type AddTransactionSchema } from "$lib/schemas";
  import { TransactionType } from "$lib/models";
  import type { FormOptions } from "formsnap";

  export let form: SuperValidated<AddTransactionSchema>;

  const dispatch = createEventDispatcher();

  const options: FormOptions<AddTransactionSchema> = {
    resetForm: true,

    onUpdated: ({ form }) => {
      if (form.valid) {
        dispatch("submitted");
      }
    },
  };
</script>

<Form.Root
  {options}
  class="flex flex-col gap-4"
  method="POST"
  action="/"
  {form}
  schema={addTransactionSchema}
  let:config
>
  <Form.Field {config} name="amount">
    <Form.Item>
      <Form.Label>Amount</Form.Label>
      <Form.Input type="number" step="0.01" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="description">
    <Form.Item>
      <Form.Label>Description</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="date">
    <Form.Item>
      <Form.Label>Date</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="type">
    <Form.Item>
      <Form.Label>Type</Form.Label>
      <Form.Select>
        <Form.SelectTrigger placeholder="Select transaction type" />
        <Form.SelectContent>
          {#each Object.values(TransactionType) as type}
            <Form.SelectItem value={type}>{type}</Form.SelectItem>
          {/each}
        </Form.SelectContent>
      </Form.Select>
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>
