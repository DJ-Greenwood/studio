
import type { Metadata } from 'next';
import HeroAnimation from '@/components/animations/HeroAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Globe, LockKeyhole, HeartHandshake, Inspect, RotateCcw, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const coreValues = [
  {
    title: "Empathy First",
    description: "AI interactions are designed with emotional intelligence to support well-being and connection.",
    icon: HeartHandshake,
  },
  {
    title: "Creativity Unleashed",
    description: "Users are empowered to express themselves through text, image, and interaction.",
    icon: Palette,
  },
  {
    title: "Privacy & Security",
    description: "Data is encrypted, user-owned, and never exploited.",
    icon: LockKeyhole,
  },
  {
    title: "Global Responsibility",
    description: "Our technology considers equity, sustainability, and mental health impact.",
    icon: Globe,
  },
  {
    title: "Transparency",
    description: "Clear disclosure of how AI and data are used in every product.",
    icon: Inspect,
  },
  {
    title: "Continuous Reflection",
    description: "We evolve based on ethical review, community input, and global standards.",
    icon: RotateCcw,
  },
];

const pageTitle = "MyImaginaryFriends.AI | Ethical AI for Reflection & Creativity";
const pageDescription = "Discover MyImaginaryFriends.AI. We build AI tools like Bubbas.AI (emotional journal) and BubbaStickers.AI (sticker generator) to empower reflection, creativity, and growth, prioritizing privacy and ethics.";
const pageKeywords = "MyImaginaryFriends.AI, ethical AI, creative AI, Bubbas.AI, BubbaStickers.AI, AI journaling, AI sticker generator, emotional intelligence AI, responsible technology";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords.split(', '),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-homepage.png', // Specific OG image for homepage if desired, otherwise falls back to layout.tsx
        width: 1200,
        height: 630,
        alt: 'MyImaginaryFriends.AI - Nurturing Creativity and Reflection with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-homepage.png'],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MyImaginaryFriends.AI",
  "url": "https://myimaginaryfriends.ai", // Replace with actual domain if different
  "logo": "https://myimaginaryfriends.ai/MyImaginaryFriends/Logo/MyImaginaryFrieds.AI.Logo.png", // Replace with actual logo URL
  "description": "MyImaginaryFriends.AI is the parent company of emotionally intelligent and creativity-boosting AI applications. We create digital tools that empower users to reflect deeply, express creatively, and grow intentionally — all while respecting privacy and ethical standards.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "Founder@myimaginaryfriends.ai",
    "contactType": "Customer Support"
  },
  "sameAs": [
    // Add social media links here if available
    // "https://www.instagram.com/yourprofile",
    // "https://twitter.com/yourprofile"
  ]
};


export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/20 via-background to-accent/10 overflow-hidden">
        <HeroAnimation />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            MyImaginaryFriends.AI
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            We create digital tools that empower users to reflect deeply, express creatively, and grow intentionally — all while respecting privacy and ethical standards.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/apps-overview">Discover Our Apps</Link>
            </Button>
            {/* Removed Try Marketing AI button
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="/marketing-generator">Try Marketing AI</Link>
            </Button>
            */}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <CardTitle className="text-3xl font-semibold text-foreground mb-3">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-lg">
                <p>
                  We create human-centered AI that supports emotional well-being, inspires creativity, and fosters empathy across cultures.
                </p>
                <p className="mt-2">
                  We believe everyone — regardless of background, age, or location — should have access to safe, expressive, and empowering technology. Our vision is to build tools that help people connect with themselves and others in more meaningful ways.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <CardTitle className="text-3xl font-semibold text-foreground mb-3">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-lg">
                <p>
                  We build AI companions and creativity tools that promote intentional growth, emotional insight, and imaginative expression — while safeguarding privacy and aligning with global ethical standards for responsible AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 md:py-24 bg-primary/5">
         <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <Card key={value.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                    <value.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground flex-grow">
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Featured App */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Bubbas.AI
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              An emotionally supportive AI journaling and reflection companion.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Bubbas.AI/bubba-sticker-transparent.png"
              alt="Bubbas.AI AI journaling companion app interface preview"
              width={600}
              height={400}
              data-ai-hint="robot companion"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/apps-overview#bubbas-ai">Learn More About Bubbas.AI and BubbaStickers.AI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Statement Section */}
      <section className="w-full py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            MyImaginaryFriends.AI is not just another AI company.
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl mb-8">
            We're building a future where technology helps people feel more human — not less.
            Join us as we build tools that help people: Reflect with Bubbas.AI, Express with BubbaStickers.AI, And imagine, with intention.
          </p>
        </div>
      </section>
    </div>
  );
}
