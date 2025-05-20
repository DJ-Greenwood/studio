
import type { Metadata } from 'next';
import PurposeClientPage from './PurposeClientPage';
import { Separator } from '@/components/ui/separator';

const pageTitle = "Our Purpose | MyImaginaryFriends.AI";
const pageDescription = "Discover the 'why' behind MyImaginaryFriends.AI. Learn our mission to foster reflection, creativity, and emotional wellness in a world needing connection.";
const pageKeywords = "MyImaginaryFriends.AI purpose, why we built AI, emotional wellness AI, AI for reflection, creative AI mission, mental health support, AI for connection";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords.split(', '),
  alternates: {
    canonical: '/purpose',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/purpose',
    type: 'article',
    images: [
      {
        url: '/og-purpose.png', 
        width: 1200,
        height: 630,
        alt: 'The Purpose of MyImaginaryFriends.AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-purpose.png'],
  },
};

export default function PurposePageContainer() {
  return (
    <PurposeClientPage />
  );
}
