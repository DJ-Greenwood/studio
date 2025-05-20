
import type { Metadata } from 'next';
import ResponsibleAIClientPage from './ResponsibleAIClientPage'; // New client component

const pageTitle = "Responsible AI & Ethics Policy";
const pageDescription = "Learn about MyImaginaryFriends.AI's commitment to responsible AI, data privacy, ethical standards, and transparency in our AI applications like Bubbas.AI and BubbaStickers.AI.";
const pageKeywords = "responsible AI, ethical AI, data privacy, AI transparency, AI safety, MyImaginaryFriends.AI ethics, AI policy";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords.split(', '),
  alternates: {
    canonical: '/responsible-ai',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/responsible-ai',
    type: 'article',
    images: [
      {
        url: '/og-responsible-ai.png',
        width: 1200,
        height: 630,
        alt: 'MyImaginaryFriends.AI Responsible AI and Ethics Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-responsible-ai.png'],
  },
};

export default function ResponsibleAIPageContainer() {
  return <ResponsibleAIClientPage />;
}
