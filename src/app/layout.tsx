
import type {Metadata} from 'next';
import { Inter as FontSans } from "next/font/google"; // Using Inter instead of Geist for broader character support and modern feel
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const siteName = "MyImaginaryFriends.AI";
const siteDescription = "MyImaginaryFriends.AI: Ethical AI companions for reflection & creativity. Discover Bubbas.AI (emotional support journal) & BubbaStickers.AI (sticker generator).";
const siteKeywords = "AI companion, emotional support AI, creative AI tools, journaling app, sticker generator, ethical AI, responsible AI, MyImaginaryFriends.AI, Bubbas.AI, BubbaStickers.AI";
const baseUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://myimaginaryfriends.ai');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${siteName} | Ethical AI Companions & Creative Tools`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords.split(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl.toString(),
    siteName: siteName,
    title: `${siteName} | Ethical AI Companions & Creative Tools`,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: `${siteName} - Ethical AI for Reflection and Creativity`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Ethical AI Companions & Creative Tools`,
    description: siteDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
 icon: '/MyImaginaryFriends/favicon.ico',
    apple: '/MyImaginaryFriends/Logo/MyImaginaryFrieds.AI.Logo.png', // Updated to use main logo 
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
