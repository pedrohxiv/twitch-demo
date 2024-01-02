import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitch",
  icons: { icon: "/twitch.svg" },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="twitch-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
