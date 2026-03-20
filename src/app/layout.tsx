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
  title: "VIRTUAL LOCUS | Software Development, B2B SaaS & AI Automation",
  description: "Virtual Locus is a premier technology agency specializing in custom enterprise software, scalable B2B SaaS platforms, and intelligent AI automation for global brands.",
  metadataBase: new URL('https://www.virtuallocus.in'),
  keywords: ["Software Development Company", "B2B SaaS Solutions", "AI Automation Agency", "Custom AI Agents", "Enterprise Software", "Web App Development", "Tech Consulting"],
  twitter: {
    card: "summary_large_image",
    site: "@VirtualLocus",
    creator: "@VirtualLocus",
  },
  openGraph: {
    type: "website",
    title: "VIRTUAL LOCUS | Custom Software & AI Automation",
    description: "Build, Scale, and Automate with Virtual Locus. Custom enterprise software and AI solutions designed for growth.",
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

