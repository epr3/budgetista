import { Outlet } from "@remix-run/react";
import bg from "$assets/auth-bg.svg";

export default function Auth() {
  return (
    <>
      <div className="hidden lg:block absolute h-screen w-1/2 right-0 top-0">
        <img className="-z-1 w-full h-full object-cover" src={bg} alt="background" />
        <h2 className="absolute text-accent text-5xl top-1/2 text-center w-full">Budgetista</h2>
      </div>
      <div className="p-12 h-screen">
        <Outlet />
      </div>
    </>
  );
}
