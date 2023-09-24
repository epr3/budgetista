<script lang="ts">
  import * as Dialog from "$molecules/Dialog";

  import { page } from "$app/stores";

  import IconButton from "$atoms/IconButton/IconButton.svelte";

  import AddTransactionForm from "./AddTransactionForm.svelte";

  let open: boolean | undefined = false;

  const setOpen = (value: boolean | undefined) => {
    open = value;
  };
</script>

<div
  class="fixed bottom-0 w-screen bg-primary text-white lg:h-screen flex justify-center lg:(static w-24 flex-col justify-start) items-center gap-4 p-4"
>
  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-home square-10" />
  </IconButton>

  <IconButton href="/profile" color="SECONDARY">
    <div class="i-lucide-user square-10" />
  </IconButton>

  <IconButton href="/transactions" color="SECONDARY">
    <div class="i-lucide-receipt square-10" />
  </IconButton>

  <IconButton color="SECONDARY" on:click={() => setOpen(true)}>
    <div class="i-lucide-plus square-10" />
  </IconButton>
</div>

<Dialog.Root {open} onOpenChange={setOpen}>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Add transaction</Dialog.Title>
    </Dialog.Header>
    <AddTransactionForm form={$page.data.transactionForm} on:submitted={() => setOpen(false)} />
  </Dialog.Content>
</Dialog.Root>
