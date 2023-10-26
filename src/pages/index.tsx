import { ReactElement, useMemo } from "react";
import dayjs from "@/lib/dayjs";

import { Today } from "@/components/molecules/Today/Today";
import { NextPageWithLayout } from "./_app";
import { getLayout } from "@/components/layouts/AppLayout";

const Index: NextPageWithLayout = () => {
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
};

Index.getLayout = getLayout;

export default Index;
