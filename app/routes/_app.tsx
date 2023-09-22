import { Outlet } from "@remix-run/react";
import { Navbar } from "$organisms/Navbar";

export default function App() {
  return (
    <div className="grid grid-rows-[1fr_6rem] lg:grid-rows-1 lg:grid-cols-[6rem_1fr]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
