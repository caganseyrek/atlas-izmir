"use client";

import React from "react";

import { QueryClientProvider } from "./query-client-provider";
import { ThemeProvider } from "./theme-provider";
import { WrapperProps } from "@/globals";

function Providers({ children }: Pick<WrapperProps, "children">) {
  return (
    <ThemeProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

export { Providers };
