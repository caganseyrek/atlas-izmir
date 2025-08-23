import React from "react";

import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";

import { WrapperProps } from "@/globals";

function QueryClientProvider({ children }: Pick<WrapperProps, "children">) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: 2 * 1000,
        networkMode: "offlineFirst",
        refetchOnReconnect: "always",
        refetchOnWindowFocus: "always",
      },
      mutations: {
        retry: 3,
        retryDelay: 2 * 1000,
        networkMode: "offlineFirst",
      },
    },
  });

  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
}

export { QueryClientProvider };
