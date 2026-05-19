import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Sova — Franchise Growth Platform", template: "%s | Sova" },
  description: "Sova gives Canadian franchise brands complete visibility, control, and confidence across every location. One platform built for franchise operators.",
  keywords: ["franchise platform", "franchise marketing", "Canadian franchise", "franchise software", "franchise management"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
