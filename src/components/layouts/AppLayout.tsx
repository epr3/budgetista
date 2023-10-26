import { Navbar } from "@/components/organisms/Navbar";
import { ReactElement } from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[1fr_6rem] lg:grid-rows-1 lg:grid-cols-[6rem_1fr]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
