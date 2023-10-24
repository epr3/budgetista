import { ReactElement, useMemo } from "react";
import dayjs from "@/lib/dayjs";

import { Today } from "@/components/molecules/Today/Today";

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
