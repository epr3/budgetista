import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <>
      <p>Auth</p>
      <Outlet />
    </>
  );
}
