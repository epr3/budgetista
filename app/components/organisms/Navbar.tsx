import { Link } from "@remix-run/react";

import { Button } from "$atoms/Button/Button";

const Navbar = () => (
  <div className="fixed bottom-0 w-screen bg-primary text-white flex justify-center items-center gap-4 p-4 lg:static lg:w-24 lg:flex-col lg:justify-start lg:w-auto lg:h-screen">
    <Button asChild variant="secondary" size="icon">
      <Link to="/">
        <div className="i-lucide-home square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link to="/profile">
        <div className="i-lucide-user square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link to="/transactions">
        <div className="i-lucide-receipt square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link to="?add_transaction=true">
        <div className="i-lucide-plus square-10" />
      </Link>
    </Button>
  </div>
);

export { Navbar };
