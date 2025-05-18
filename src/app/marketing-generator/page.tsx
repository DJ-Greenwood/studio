
import type { Metadata } from 'next';
import { MarketingGeneratorForm } from "@/components/marketing/MarketingGeneratorForm";

const pageTitle = "AI Marketing Copy Generator";
const pageDescription = "Craft compelling marketing campaigns effortlessly with MyImaginaryFriends.AI's AI-Powered Marketing Generator. Get unique copy, social media strategies, and more.";
const pageKeywords = "AI marketing, marketing copy generator, AI content creation, social media strategy AI, campaign generator, MyImaginaryFriends.AI tools";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords.split(', '),
  alternates: {
    canonical: '/marketing-generator',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/marketing-generator',
    type: 'website', // Could be 'tool' if a more specific type exists
    images: [
      {
        url: '/og-marketing-generator.png', // Specific OG image for this page
        width: 1200,
        height: 630,
        alt: 'AI Marketing Copy Generator by MyImaginaryFriends.AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-marketing-generator.png'],
  },
};

export default function MarketingGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            AI-Powered Marketing Generator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Craft compelling marketing campaigns effortlessly with the help of AI.
          </p>
        </header>

        <MarketingGeneratorForm />
      </div>
    </div>
  );
}
