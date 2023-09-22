<script lang="ts">
  import dayjs from "$lib/dayjs";
  export let date: string;

  $: convertedDate = dayjs(date);
</script>

<div class="flex bg-primary p-4 rounded shadow-lg">
  <div
    class="px-4 py-2 rounded-lg bg-secondary text-gray-9 text-4xl flex items-center justify-center"
  >
    {convertedDate.format("DD")}
  </div>
  <div class="p-4 text-white font-semibold text-2xl">
    <p>{convertedDate.format("MMMM")}</p>
    <p>{convertedDate.format("YYYY")}</p>
  </div>
</div>
