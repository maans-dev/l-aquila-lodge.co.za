import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Italiana } from 'next/font/google'

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "East Cape Protea and Fynbos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={italiana.className}>{children}</body>
    </html>
  );
}
