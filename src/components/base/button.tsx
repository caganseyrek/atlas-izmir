import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { FlexBox } from "../flexbox";
import { WrapperProps } from "@/globals";

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonBaseProps {
  asChild?: boolean;
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

const buttonVariants = cva(
  [
    "shrink-0 truncate inline-flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "text-foreground-darker hover:bg-gray-2 hover:text-foreground data-[state=open]:bg-gray-2 focus-visible:border-border-lighter! focus-visible:ring-ring/40 transition-all focus-visible:ring-[3px]",
        unstyled: "",
      },
      size: {
        default: "w-fit px-2.5 h-8",
        defaultFull: "w-full px-2.5 h-8",
        icon: "p-0 size-8 justify-center",
        auto: "w-auto h-auto p-0",
      },
      borderRadius: {
        default: "rounded-sm",
        small: "rounded-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  borderRadius = "default",
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(buttonVariants({ variant, size, borderRadius }), "", className)} {...props} />;
}

function ButtonContainer({ children, className }: WrapperProps) {
  return (
    <FlexBox
      className={cn(
        "h-8 w-full items-center justify-start rounded-sm px-2.5",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}>
      {children}
    </FlexBox>
  );
}

export { type ButtonProps, type LinkButtonProps, Button, buttonVariants, ButtonContainer };
