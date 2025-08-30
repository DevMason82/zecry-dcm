"use client";

import * as React from "react";
import { Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SWRConfig } from "swr";
import { jsonFetcher } from "@/lib/fetcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <SWRConfig
        value={{
          fetcher: jsonFetcher,
          revalidateOnFocus: true,
          dedupingInterval: 2000,
          suspense: true,
        }}
      >
        {/* 전역 suspense: 각 route의 loading.tsx가 있으면 그게 우선 */}
        <Suspense fallback={<div className="opacity-70 p-4">Loading...</div>}>
          {children}
        </Suspense>
      </SWRConfig>
    </NextThemesProvider>
  );
}
