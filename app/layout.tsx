import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import PageTransition from "@/components/PageTransition";
import BoulevardScript from "@/components/BoulevardScript";

export const metadata: Metadata = {
  title: {
    default: "Century 360 | Spa & Sauna House — Hicksville, NY",
    template: "%s | Century 360 Spa & Sauna House",
  },
  description:
    "Century 360 Spa & Sauna House in Hicksville, NY offers dry sauna, steam shower, cold plunge, red light therapy, IV vitamin infusions, lymphatic drainage, and more. Restore your body. Reset your mind.",
  keywords: [
    "spa hicksville ny","sauna house long island","steam shower hicksville",
    "cold plunge ny","red light therapy","iv vitamin infusions",
    "lymphatic drainage spa","wellness spa nassau county","century 360",
  ],
  openGraph: {
    title: "Century 360 | Spa & Sauna House",
    description: "Restore your body. Reset your mind. Everything, in balance.",
    siteName: "Century 360",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://century360.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-mocha antialiased">
        <StructuredData />
        <BoulevardScript />
        <Navbar />
        <PageTransition><main>{children}</main></PageTransition>
        <Footer />
      </body>
    </html>
  );
}
