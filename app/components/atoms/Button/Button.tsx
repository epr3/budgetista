import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "$lib/utils";

const buttonVariants = cva("rounded flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-primary text-white hover:bg-blueGray",
      secondary: "bg-secondary text-gray-9 hover:bg-blue",
      success: "bg-green-500 text-green-100 hover:text-green-500 hover:bg-green-300",
      error: "bg-red-500 text-red-100 hover:text-red-500 hover:bg-red-300",
    },
    size: {
      default: "px-4 py-2 h-10",
      icon: "square-20",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
