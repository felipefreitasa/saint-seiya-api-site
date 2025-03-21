"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export enum QUERY_KEYS {
  CHARACTER_GET_LIST = "CHARACTER_GET_LIST",
  CHARACTER_GET_BY_ID = "CHARACTER_GET_BY_ID",
}

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
