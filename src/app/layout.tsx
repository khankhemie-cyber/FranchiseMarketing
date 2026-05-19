import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sova — The Operating System for Canadian Franchise Growth",
  description:
    "One platform. Eight modules. Built exclusively for the Canadian franchise market. Sova replaces disconnected tools with a unified operating platform for franchise brands.",
  keywords: ["franchise marketing", "franchise software", "Canadian franchise", "franchise platform", "franchise SaaS"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
