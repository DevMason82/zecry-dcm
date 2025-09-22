import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/styles/globals.css";
import { Providers } from "@/components/providers";
import { cookies } from "next/headers";
import * as React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
