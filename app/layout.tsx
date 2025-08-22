import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-upright",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Zenbrew",
    template: "%s | Zenbrew",
  },
  description:
    "Zenbrew - offers specialty coffee made from freshly roasted beans, artisan desserts, and a cozy atmosphere. Visit us for breakfast, coffee breaks, or evening gatherings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
