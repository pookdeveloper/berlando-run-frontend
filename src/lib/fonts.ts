import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fontGrotesk = Inter({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
});

export const fontCairo = localFont({
  src: "../../assets/fonts/Cairo-Variable.ttf",
  variable: "--font-cairo",
  display: "swap",
});
