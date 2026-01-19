import type { Metadata } from "next";
import { Toaster } from '@/_components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";



export const metadata: Metadata = {
  title: "Nate Cole's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
