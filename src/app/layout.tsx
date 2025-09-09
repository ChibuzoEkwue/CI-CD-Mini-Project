import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "CI/CD Mini Project",
  description: "a project to learn CI/CD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
