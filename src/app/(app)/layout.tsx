import { Navbar } from "@/components/organisms/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[1fr_6rem] lg:grid-rows-1 lg:grid-cols-[6rem_1fr]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
