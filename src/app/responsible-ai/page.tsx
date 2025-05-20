
import type { Metadata } from 'next';
import ResponsibleAIClientPage from './ResponsibleAIClientPage'; 

const pageTitle = "Responsible AI & Ethics Policy | MyImaginaryFriends.AI";
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Responsible AI & Ethics Policy",
  "description": "Learn about MyImaginaryFriends.AI's commitment to responsible AI, data privacy, ethical standards, and transparency in our AI applications like Bubbas.AI and BubbaStickers.AI.",
  "image": "https://myimaginaryfriends.ai/og-responsible-ai.png",
  "datePublished": "2025-05-20", 
  "dateModified": "2025-05-20", 
  "author": {
    "@type": "Organization",
    "name": "MyImaginaryFriends.AI",
    "url": "https://myimaginaryfriends.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MyImaginaryFriends.AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://myimaginaryfriends.ai/MyImaginaryFriends/Logo/MyImaginaryFrieds.AI.Logo.png"
    },
    "url": "https://myimaginaryfriends.ai"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://myimaginaryfriends.ai/responsible-ai"
  }
};

export default function ResponsibleAIPageContainer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ResponsibleAIClientPage />
    </>
  );
}

    
