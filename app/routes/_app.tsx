import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <>
      <p>App</p>
      <Outlet />
    </>
  );
}