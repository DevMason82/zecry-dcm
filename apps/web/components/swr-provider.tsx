"use client";

import { SWRConfig } from "swr";
import * as React from "react";
import { jsonFetcher } from "@/lib/fetcher";
export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: jsonFetcher,
        revalidateOnFocus: true,
        dedupingInterval: 2000,
        suspense: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};
