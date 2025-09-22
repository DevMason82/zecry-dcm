// app/(auth)/layout.tsx
import * as React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { ProvidersNoSidebar } from "@/components/providers-no-sidebar";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-svh flex items-center justify-center overflow-y-auto bg-background text-foreground">
      {children}
    </main>
  );
}
