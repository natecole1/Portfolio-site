import type { Metadata } from "next";
import { lato } from "./fonts";
import "./globals.css";
import { Toaster } from '@/_components/ui/sonner';





export const metadata: Metadata = {
  title: "Nate Cole's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}  antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
