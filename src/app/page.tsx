
import HeroAnimation from '@/components/animations/HeroAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Eye, Gem, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/20 via-background to-accent/10 overflow-hidden">
        <HeroAnimation />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            MyImaginaryFriends.AI
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Exploring the frontiers of imagination, creativity, and companionship with cutting-edge AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/apps-overview">Discover Our Apps</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="/marketing-generator">Try Marketing AI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                  <Eye className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  To pioneer a future where AI enhances human creativity and connection, making imagination limitless and accessible to all.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                  <Target className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  To build delightful and responsible AI experiences that inspire, entertain, and empower individuals in their creative journeys.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                  <Gem className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> Creativity</li>
                  <li className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> Responsibility</li>
                  <li className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> Innovation</li>
                  <li className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> User-centricity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action / Featured App */}
      <section className="w-full py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Bubbas.AI
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Your friendly AI companion, ready to chat, learn, and grow with you.
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Bubbas.AI preview" 
              width={600} 
              height={400}
              data-ai-hint="robot companion"
              className="rounded-xl shadow-2xl" 
            />
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/apps-overview#bubbas-ai">Learn More About Bubbas.AI</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
