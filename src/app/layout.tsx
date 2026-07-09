import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import "@/app/globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap", preload: true });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Softbridge Akademi | Premium KPSS Vatandaşlık Çalışma Platformu",
    template: "%s | Softbridge Akademi",
  },
  description: "KPSS Vatandaşlık için konu anlatımı, açıklamalı test, flashcard, deneme, timeline ve performans analizi sunan modern çalışma platformu.",
  keywords: ["KPSS Vatandaşlık", "KPSS vatandaşlık konu anlatımı", "KPSS vatandaşlık test", "KPSS vatandaşlık deneme", "KPSS vatandaşlık flashcard"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Softbridge Akademi",
    description: "Premium KPSS Vatandaşlık çalışma platformu.",
    siteName: "Softbridge Akademi",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
