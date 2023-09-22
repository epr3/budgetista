<script lang="ts">
  type Transaction = {
    id: string;
    category: string;
    amount: number;
    date: string;
  };
  export let header: string;
  export let transactions: Transaction[];
</script>

<div class="p-4 text-center">
  <h2 class="text-2xl text-gray-9 font-semibold">{header}</h2>
  <ul>
    {#each transactions as transaction}
      <li>{transaction.category}: {transaction.amount} {transaction.date}</li>
    {:else}
      <li>No transactions</li>
    {/each}
  </ul>
</div>
