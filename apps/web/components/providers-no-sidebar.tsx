import * as React from "react";
import { Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { cookies } from "next/headers";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SWRProvider } from "@/components/swr-provider";

export async function ProvidersNoSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <SWRProvider>
        {/*전역 suspense: 각 route의 loading.tsx가 있으면 그게 우선 */}
        <Suspense fallback={<div className="opacity-70 p-4">Loading...</div>}>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="flex justify-center p-6 overflow-y-auto bg-amber-100 w-[300px] text-foreground">
              {children}
            </main>
          </SidebarProvider>
        </Suspense>
      </SWRProvider>
    </NextThemesProvider>
  );
}
