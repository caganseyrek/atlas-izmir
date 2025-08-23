import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "text-foreground placeholder:text-foreground-darker/50 focus-visible:border-border-lighter! focus-visible:ring-border/85 inline-flex h-8 w-full shrink-0 cursor-text items-center gap-2 truncate px-2.5 whitespace-nowrap transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border text-foreground-darker bg-gray-2/65 hover:text-foreground data-[state=open]:bg-gray-2",
        defaultLighter: "border bg-gray-2",
        unstyled: "",
      },
      borderRadius: {
        default: "rounded-sm",
        small: "rounded-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      borderRadius: "default",
    },
  },
);

function Input({
  variant = "default",
  borderRadius = "default",
  className,
  type,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return <input type={type} className={cn(inputVariants({ variant, borderRadius }), className)} {...props} />;
}

export { Input, inputVariants };
