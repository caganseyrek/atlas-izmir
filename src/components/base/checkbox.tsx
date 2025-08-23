"use client";

import React from "react";

import { Indicator, Root } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root
      className={cn(
        "peer h-4.5 w-4.5 shrink-0 rounded-sm border",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary-border! data-[state=checked]:text-primary-foreground",
        className,
      )}
      {...props}>
      <Indicator className="flex items-center justify-center text-current">
        <Check className="size-4 shrink-0" />
      </Indicator>
    </Root>
  );
}

export { Checkbox };
