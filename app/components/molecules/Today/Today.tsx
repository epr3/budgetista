import dayjs from "$lib/dayjs";
import { useMemo } from "react";

const Today = ({ date }: { date: string }) => {
  const convertedDate = useMemo(() => dayjs(date), [date]);

  return (
    <div className="flex bg-primary p-4 rounded shadow-lg">
      <div className="px-4 py-2 rounded-lg bg-secondary text-gray-9 text-4xl flex items-center justify-center">
        {convertedDate.format("DD")}
      </div>
      <div className="p-4 text-white font-semibold text-2xl">
        <p>{convertedDate.format("MMMM")}</p>
        <p>{convertedDate.format("YYYY")}</p>
      </div>
    </div>
  );
};

Today.displayName = "Today";

export { Today };
