import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";

import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
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
        className={`${cormorantUpright.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
