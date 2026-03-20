import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SocialSidebar from "@/components/ui/SocialSidebar";
import LaunchCelebration from "@/components/ui/Celebration";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VIRTUAL LOCUS",
  description: "VIRTUAL LOCUS delivers high-impact software development, scalable B2B SaaS solutions, and intelligent AI automation for modern businesses.",
  metadataBase: new URL('https://www.virtuallocus.in'),
  twitter: {
    card: "summary_large_image",
    site: "@VirtualLocus",
    creator: "@VirtualLocus",
  },
  openGraph: {
    type: "website",
    title: "VIRTUAL LOCUS",
    description: "VIRTUAL LOCUS delivers high-impact software development, scalable B2B SaaS solutions, and intelligent AI automation for modern businesses.",
    siteName: "Virtual Locus",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-body bg-white text-slate-900 antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <SocialSidebar />
        <WhatsAppButton />
        <LaunchCelebration />
      </body>
    </html>
  );
}

