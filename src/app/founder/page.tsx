
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Brain, Heart, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Founder | MyImaginaryFriends.ai',
  description: 'Meet James Greenwood, the founder of MyImaginaryFriends.ai. Discover the story, vision, and mission behind building human-first AI tools for reflection and growth.',
  alternates: {
    canonical: '/founder',
  },
};

export default function FounderPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <header className="mb-12 text-center">
        <div className="flex justify-center mb-6">
            <Image
                src="https://placehold.co/150x150.png"
                alt="James Greenwood"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
                data-ai-hint="portrait man"
            />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Hi, I’m James Greenwood – Creator of MyImaginaryFriends.ai
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Building human-first AI tools to help people reflect, grow, and thrive – with privacy, purpose, and personality.
        </p>
      </header>

      <Separator className="my-10" />

      <section className="mb-12 space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">Why I Built This</h2>
        <div className="text-muted-foreground space-y-4 text-lg">
        <p>
          This began as a personal proof of concept during my Master's in Data Science — a challenge to identify a real problem and solve it with measurable, human-centered results.
        </p>
        <p>
          But life doesn’t pause for academic timelines. In the middle of that pursuit, I found myself navigating unexpected challenges — and realized the journey itself was the insight.
        </p>
        <p>
          I built a simple AI journaling tool to help myself think clearly through the chaos — and something clicked.
        </p>
        <p className="font-semibold text-foreground">
          That clarity sparked a bigger question:
          <br />
          What if we created tools that helped <em>anyone</em> reflect deeply — not just high performers, but everyday people, kids, creatives, and caretakers?
        </p>
        <p>
          MyImaginaryFriends.ai was born from that vision. It’s not about escaping reality — it’s about helping you face it, with perspective.
        </p>
        <p>
          What started as a playful prompt — to simulate the warm, loyal energy of my Yorkie companion — has grown into an evolving ecosystem of emotional AI tools. Tools that, one day soon, may not just support individuals, but contribute meaningfully to the well-being of humanity as a whole.
        </p>

        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-foreground">Our Vision</h2>
          <p className="text-muted-foreground text-lg">
            To create AI companions that help people think deeply, reflect meaningfully, and grow intentionally over time.
          </p>
        </div>
        <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
                We provide AI companions designed to help users reflect, plan, and understand their thoughts through structured interactions, journaling, and gamified insights.
            </p>
            <p className="text-muted-foreground text-lg">
                By integrating memory, emotional intelligence, and multi-persona AI, we make long-term thinking engaging and accessible — while ensuring privacy and ethical AI use at every step.
            </p>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12 space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">What I Believe About AI</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
          <li>AI should <strong>respect your privacy</strong>, not exploit your data.</li>
          <li>Reflection tools should be <strong>intimate, secure, and emotionally intelligent</strong>.</li>
          <li>Not everyone needs a therapist — sometimes, they just need space to think and a safe presence to explore.</li>
          <li>Imaginary friends weren’t childish — they were practice for adult inner clarity.</li>
        </ul>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Meet the MyImaginaryFriends.ai Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="items-center text-center">
              <Heart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Bubbas.ai</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>An emotional support companion powered by AI — with the heart of a Yorkie puppy. Bubba offers empathy, play, and comfort through conversation.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="items-center text-center">
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>CognitiveInsight.ai</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
                <p>A reflection and clarity platform guided by the Cognitive Edge Protocol™ — ideal for thinkers, leaders, and those seeking realignment.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="items-center text-center">
              <Palette className="h-10 w-10 text-primary mb-2" />
              <CardTitle>BubbaSticker.ai</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>A playful generative image app to express moods, ideas, and self through creative stickers and visual storytelling.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12 space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">About the Founder</h2>
        <p className="text-muted-foreground text-lg">
          <strong>James Greenwood</strong> is a data analyst, AI developer, and reflective systems designer.
        </p>
        <p className="text-muted-foreground text-lg">
          He holds Microsoft certifications in AI Engineering, Azure Data Science, and AI Fundamentals, and is completing an MS in Data Science from the University of Colorado Boulder.
        </p>
        <p className="text-muted-foreground text-lg">
          James is the creator of the Cognitive Edge Protocol™ and the founder of MyImaginaryFriends.ai — an AI ecosystem devoted to clarity, emotional intelligence, and deeply ethical design.
        </p>
      </section>

      <Separator className="my-10" />
      
      <section className="mb-12 space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">Looking Ahead</h2>
        <div className="text-muted-foreground space-y-4 text-lg">
        <p>
          As this platform evolves, I am currently focusing on building out the <Link href="https://cognitiveinsight.ai" className="text-primary hover:underline font-medium">Cognitive Insight AI</Link> site.
        </p>
        <p>
          Landing pages for <Link href="https://bubbas.ai" className="text-primary hover:underline font-medium">Bubbas.AI</Link> and <Link href="https://bubbastickers.ai" className="text-primary hover:underline font-medium">BubbaStickers.AI</Link> are also in the works to provide dedicated spaces for these tools.
        </p>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">Interested in collaborating or supporting the mission?</p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <a href="mailto:founder@myimaginaryfriends.ai" className="flex items-center gap-2 text-primary hover:underline">
            <Mail className="h-5 w-5" />
            founder@myimaginaryfriends.ai
          </a>
          <a href="https://www.linkedin.com/in/denzil-james-greenwood" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
