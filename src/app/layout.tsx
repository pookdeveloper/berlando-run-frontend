import type { Metadata } from "next";
import { fontGrotesk, fontMono } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://berlando.run"),
  title: {
    default: "Berlando Run — Running as Freedom",
    template: "%s | Berlando Run",
  },
  description:
    "Premium trail running apparel designed for freedom, function, and form. Technical gear for runners who explore.",
  keywords: [
    "trail running",
    "running apparel",
    "technical running gear",
    "premium sportswear",
    "ultralight running",
    "run club",
  ],
  authors: [{ name: "Berlando Run" }],
  creator: "Berlando Run",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://berlando.run",
    siteName: "Berlando Run",
    title: "Berlando Run — Running as Freedom",
    description:
      "Premium trail running apparel designed for freedom, function, and form.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berlando Run",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlando Run — Running as Freedom",
    description:
      "Premium trail running apparel designed for freedom, function, and form.",
    images: ["/og-image.jpg"],
    creator: "@berlando_run",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontGrotesk.variable} ${fontMono.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
