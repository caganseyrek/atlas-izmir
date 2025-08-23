"use client";

import React from "react";

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";

import { Button, type ButtonProps, buttonVariants } from "@/components/base/button";

import { cn } from "@/lib/utils";

function DropdownMenu({ children, ...props }: React.ComponentProps<typeof Root>) {
  return <Root {...props}>{children}</Root>;
}

function DropdownMenuTrigger({ children, className, ...props }: React.ComponentProps<typeof Trigger>) {
  return (
    <Trigger className={cn(className, "cursor-pointer")} {...props}>
      {children}
    </Trigger>
  );
}

function DropdownMenuContent({ className, sideOffset = 4.5, ...props }: React.ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        sideOffset={sideOffset}
        className={cn(
          "max-h-[500px] min-w-full",
          "bg-gray-2 z-50 overflow-x-hidden overflow-y-auto rounded-sm border shadow-lg",
          "flex flex-col items-start justify-start",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
          className,
        )}
        {...props}
      />
    </Portal>
  );
}

function DropdownMenuContentGroup({ children, className, ...props }: React.ComponentProps<typeof Group>) {
  return (
    <Group className={cn("flex w-full flex-col items-start justify-start p-1", className)} {...props}>
      {children}
    </Group>
  );
}

function DropdownMenuLabel({ className, children, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn(
        "flex h-6 w-full items-center justify-start gap-1.5 px-2.5 font-medium [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}>
      {children}
    </Label>
  );
}

function DropdownMenuButtonItem({
  className,
  variant = "default",
  size = "defaultFull",
  borderRadius = "small",
  children,
  ...props
}: React.ComponentProps<typeof Item> & ButtonProps) {
  return (
    <Item {...props} asChild>
      <Button className={cn(buttonVariants({ variant, size, className, borderRadius }), className)}>{children}</Button>
    </Item>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  variant = "default",
  size = "defaultFull",
  borderRadius = "small",
  ...props
}: React.ComponentProps<typeof CheckboxItem> & ButtonProps) {
  return (
    <CheckboxItem
      className={cn(
        buttonVariants({ variant, size, className, borderRadius }),
        "relative rounded-[4px] pr-7",
        className,
      )}
      checked={checked}
      {...props}>
      <>
        <span className="absolute right-1.5 flex h-3.5 w-3.5 items-center justify-center">
          <ItemIndicator>
            <Check className="h-4 w-4" />
          </ItemIndicator>
        </span>
        {children}
      </>
    </CheckboxItem>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuContentGroup,
  DropdownMenuLabel,
  DropdownMenuButtonItem,
  DropdownMenuCheckboxItem,
};
