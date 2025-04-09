import { Italianno } from 'next/font/google';
import { Lato } from "next/font/google";

export const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ['latin'],
  weight: "400"
});

export const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "400"],
});

