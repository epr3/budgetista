<script lang="ts">
  import ProfileForm from "$organisms/ProfileForm.svelte";
  import UpdatePasswordForm from "$organisms/UpdatePasswordForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="grid grid-rows-2 gap-12 p-12 items-center lg:(mx-auto max-w-2xl)">
  <div class="flex flex-col gap-4">
    <h3 class="font-semibold text-2xl">Profile</h3>
    <ProfileForm form={data.profileForm} />
  </div>

  <div class="flex flex-col gap-4">
    <h3 class="font-semibold text-2xl">Update Password</h3>
    <UpdatePasswordForm form={data.updatePasswordForm} />
  </div>
</div>
