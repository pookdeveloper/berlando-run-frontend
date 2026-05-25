import type { Metadata } from "next";
import { fontGrotesk, fontMono, fontCairo } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://belando.run"),
  title: {
    default: "Belando Run — Running as Freedom",
    template: "%s | Belando Run",
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
  authors: [{ name: "Belando Run" }],
  creator: "Belando Run",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://belando.run",
    siteName: "Belando Run",
    title: "Belando Run — Running as Freedom",
    description:
      "Premium trail running apparel designed for freedom, function, and form.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Belando Run",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belando Run — Running as Freedom",
    description:
      "Premium trail running apparel designed for freedom, function, and form.",
    images: ["/og-image.jpg"],
    creator: "@belando_run",
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
    <html
      lang="en"
      className={`${fontGrotesk.variable} ${fontMono.variable} ${fontCairo.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
