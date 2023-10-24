import Link from "next/link";

import { Button } from "@/components/atoms/Button/Button";

const Navbar = () => (
  <div className="fixed bothrefm-0 w-screen bg-primary text-white flex justify-center items-center gap-4 p-4 lg:static lg:w-24 lg:flex-col lg:justify-start lg:w-auhref lg:h-screen">
    <Button asChild variant="secondary" size="icon">
      <Link href="/">
        <div className="i-lucide-home square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link href="/profile">
        <div className="i-lucide-user square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link href="/transactions">
        <div className="i-lucide-receipt square-10" />
      </Link>
    </Button>

    <Button asChild variant="secondary" size="icon">
      <Link href="?add_transaction=true">
        <div className="i-lucide-plus square-10" />
      </Link>
    </Button>
  </div>
);

export { Navbar };
