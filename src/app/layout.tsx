import React from "react";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "@/globals.css";
import type { WrapperProps } from "@/types";

export const metadata: Metadata = {
  title: {
    template: "%s - Atlas İzmir",
    default: "Atlas İzmir",
  },
};

export default function RootLayout({ children }: Pick<WrapperProps, "children">) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/images/favicon.png" sizes="any" /> */}
        {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
