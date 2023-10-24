type Transaction = {
  id: string;
  category: string;
  amount: number;
  date: string;
};

const TransactionList = ({
  header,
  transactions,
}: {
  header: string;
  transactions: Transaction[];
}) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl text-gray-9 font-semibold">{header}</h2>
      <ul>
        {transactions.length ? (
          transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.category}: {transaction.amount} {transaction.date}
            </li>
          ))
        ) : (
          <li>No transactions</li>
        )}
      </ul>
    </div>
  );
};

export { TransactionList };
