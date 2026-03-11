import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "BERLANDO RUN — Luxury Trail Running Apparel",
  description:
    "Premium technical running apparel for trail and all-terrain freedom.",
  openGraph: {
    title: "BERLANDO RUN",
    description:
      "Running as freedom. High-performance textiles with minimalist luxury aesthetics.",
    type: "website"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
