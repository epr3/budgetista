import type { MetaFunction } from "@remix-run/node";
import { useMemo } from "react";
import dayjs from "$lib/dayjs";

import { Today } from "$molecules/Today/Today";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const currentDay = useMemo(() => dayjs(), []);

  return (
    <div className="py-4">
      <div className="flex justify-center">
        <Today date={currentDay.format("YYYY-MM-DD")} />
      </div>

      {/* <div className="grid grid-cols-1 gap-4">
        <TransactionList header="Transactions" transactions={data.transactions} />
      </div> */}
    </div>
  );
}
