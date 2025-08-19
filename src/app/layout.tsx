import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { WhatsAppButton } from "@/components/features/WhatsAppButton";
import { CBCAgent } from "@/components/features/CBCAgent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coral Beach & Tennis Club | Bermuda's Premier Private Club",
  description: "Experience luxury and hospitality at Bermuda's premier private beach and tennis club. Offering world-class accommodations, dining, tennis, spa, and event venues since 1931.",
  keywords: "Bermuda, private club, beach club, tennis club, luxury resort, accommodations, dining, spa, weddings, events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CBCAgent />
      </body>
    </html>
  );
}
