<script lang="ts">
  import dayjs from "$lib/dayjs";

  import Today from "$molecules/Today/Today.svelte";

  import TransactionList from "$organisms/TransactionList.svelte";

  const currentDay = dayjs();
</script>

<div class="py-4">
  <div class="flex justify-center">
    <Today date={currentDay.format("YYYY-MM-DD")} />
  </div>

  <div class="grid grid-cols-2 gap-4">
    <TransactionList header="Expenses" transactions={[]} />
    <TransactionList header="Incomes" transactions={[]} />
  </div>
</div>
