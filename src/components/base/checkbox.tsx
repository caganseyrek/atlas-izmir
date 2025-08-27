"use client";

import React from "react";

import { Indicator, Root } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root
      className={cn(
        "peer h-4.5 w-4.5 shrink-0 rounded-sm data-[state=unchecked]:border data-[state=unchecked]:bg-transparent!",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}>
      <Indicator className="flex items-center justify-center text-white">
        <Check className="size-4 shrink-0" />
      </Indicator>
    </Root>
  );
}

export { Checkbox };
