import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/root-providers";
import Nav from "@/components/navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Created by angelDova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{
          colorScheme: "dark",
        }}
      >
        <body className={inter.className}>
          <RootProviders>
            <Nav />
            <NextUIProvider>
              <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
              </NextThemesProvider>
            </NextUIProvider>
          </RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
