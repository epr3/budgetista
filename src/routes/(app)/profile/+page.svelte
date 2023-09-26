<script lang="ts">
  import ProfileForm from "$organisms/ProfileForm.svelte";
  import UpdatePasswordForm from "$organisms/UpdatePasswordForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="grid grid-rows-2 gap-12 p-12 items-center lg:(mx-auto max-w-2xl)">
  <div class="flex flex-col gap-4">
    <h3 class="font-semibold text-2xl">Profile</h3>
    {#if data.profileForm}
      <ProfileForm form={data.profileForm} />
    {/if}
  </div>

  <div class="flex flex-col gap-4">
    <h3 class="font-semibold text-2xl">Update Password</h3>
    {#if data.updatePasswordForm}
      <UpdatePasswordForm form={data.updatePasswordForm} />
    {/if}
  </div>
</div>
