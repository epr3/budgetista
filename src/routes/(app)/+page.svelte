<script lang="ts">
  import type { PageData } from "./$types";

  import dayjs from "$lib/dayjs";

  import Today from "$molecules/Today/Today.svelte";

  import TransactionList from "$organisms/TransactionList.svelte";

  const currentDay = dayjs();

  export let data: PageData;
</script>

<div class="py-4">
  <div class="flex justify-center">
    <Today date={currentDay.format("YYYY-MM-DD")} />
  </div>

  <div class="grid grid-cols-1 gap-4">
    <TransactionList header="Transactions" transactions={data.transactions} />
  </div>
</div>
