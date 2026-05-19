import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sovaos.ca"),
  title: { default: "Sova — Franchise Growth Platform", template: "%s | Sova" },
  description: "Sova gives Canadian franchise brands complete visibility, control, and confidence across every location. Campaign management, paid media, geofencing, vendor marketplace, and AI intelligence — one platform.",
  keywords: ["franchise platform", "franchise marketing Canada", "Canadian franchise software", "franchise management platform", "co-op marketing", "franchise analytics"],
  authors: [{ name: "Sova Technologies Inc." }],
  creator: "Sova Technologies Inc.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://sovaos.ca",
    siteName: "Sova",
    title: "Sova — Franchise Growth Platform",
    description: "The platform Canadian franchise brands trust to manage campaigns, vendors, and performance across every location.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sova Franchise Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sova — Franchise Growth Platform",
    description: "Complete visibility and control across your entire franchise network.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://sovaos.ca" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
