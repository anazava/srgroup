import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SRGroupTM | Premium Digital Studio & Web Design",
  description: "SRGroupTM is a premium creative digital studio delivering high-performance Next.js websites, brand identity systems, and AI video reels for businesses across South India and the GCC.",
  metadataBase: new URL("https://srgrouptm.com"),
  keywords: [
    "premium web design Kerala",
    "creative studio Malappuram",
    "Next.js developers India",
    "AI video production",
    "brand identity design GCC",
    "South India digital agency",
  ],
  openGraph: {
    title: "SRGroupTM | Creative Digital Studio",
    description: "Premium websites, branding, and AI videos for ambitious brands in India and the GCC.",
    type: "website",
    locale: "en_IN",
    siteName: "SRGroupTM",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRGroupTM | Creative Digital Studio",
    description: "Premium websites, branding, and AI videos for ambitious brands in India and the GCC.",
  },
  alternates: {
    canonical: "https://srgrouptm.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SRGroupTM",
    url: "https://srgrouptm.com",
    logo: "https://srgrouptm.com/logo.png",
    description: "Premium creative digital studio delivering high-performance websites, brand identity systems, and AI video reels.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9400112833",
      contactType: "Customer Service",
      areaServed: ["IN", "AE", "SA", "OM", "QA", "BH", "KW"],
      availableLanguage: ["English", "Malayalam"],
    },
    sameAs: ["https://wa.me/919400112833"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-700 font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
