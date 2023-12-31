import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

// providers
import "./globals.css";
import ModalProvider from "@/context/ModalProviders";

// styles

// fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// metadata
export const metadata: Metadata = {
  title: "SST_Library",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ModalProvider />
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
