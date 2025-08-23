import React from "react";

import type { Metadata } from "next";

import type { WrapperProps } from "@/globals";
import "@/globals.css";
import { Providers } from "@/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
