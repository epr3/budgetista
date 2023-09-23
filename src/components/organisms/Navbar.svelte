<script lang="ts">
  import * as Dialog from "$molecules/Dialog";

  import IconButton from "$atoms/IconButton/IconButton.svelte";
  import Button from "$atoms/Button/Button.svelte";
</script>

<div
  class="fixed bottom-0 w-screen bg-primary text-white lg:h-screen flex justify-center lg:(static w-24 flex-col justify-start) items-center gap-4 p-4"
>
  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-home square-10" />
  </IconButton>

  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-user square-10" />
  </IconButton>

  <IconButton href="/" color="SECONDARY">
    <div class="i-lucide-receipt square-10" />
  </IconButton>

  <Dialog.Root>
    <Dialog.Trigger asChild let:builder>
      <IconButton href="/" color="SECONDARY" builders={[builder]}>
        <div class="i-lucide-plus square-10" />
      </IconButton>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Add transaction</Dialog.Title>
      </Dialog.Header>
      <form action="">
        <div class="grid gap-4 py-4">
          <p>Dialog Body</p>
        </div>

        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </form>
    </Dialog.Content>
  </Dialog.Root>
</div>
