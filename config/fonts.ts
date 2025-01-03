import { Fira_Code as FontMono, Inter as FontSans, Hanuman, Roboto, Anton } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export const hanuman = Hanuman({
  weight: '900',
  subsets: ['latin'],
});

