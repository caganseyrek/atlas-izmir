"use client";

import React from "react";

import { Content, Portal, Root, Trigger } from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

import { FlexBox } from "../flexbox";
import type { WrapperProps } from "@/globals";

function Popover({ ...props }: React.ComponentProps<typeof Root>) {
  return <Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex flex-col shadow-md outline-hidden",
          "bg-gray-1 text-foreground rounded-md border",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "origin-(--radix-popover-content-transform-origin)",
          className,
        )}
        {...props}>
        {children}
      </Content>
    </Portal>
  );
}

function PopoverContentGroup({ children, className }: WrapperProps) {
  return (
    <FlexBox asColumn className={cn("items-start p-2", className)}>
      {children}
    </FlexBox>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverContentGroup };
