"use client";

import React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import type { WrapperProps } from "@/globals";

function ThemeProvider({ children }: Pick<WrapperProps, "children">) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
