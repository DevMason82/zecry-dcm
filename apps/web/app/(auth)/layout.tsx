// app/(auth)/layout.tsx
import * as React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
          <main className="w-full flex-1 p-6 overflow-y-auto bg-background text-foreground">
            {/* 중앙 정렬 영역 */}
            <div className="w-full max-w-md">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
