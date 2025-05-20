
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Copy, Twitter, Facebook, Brain, Users, MessageSquareHeart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const populationData = [
  { region: "Asia", population: "4.83 billion", source: "https://www.worldometers.info/world-population/asia-population/", estimatedSupport: "25%†", affected: "~1.21 billion" },
  { region: "Africa", population: "1.55 billion", source: "https://www.worldometers.info/world-population/africa-population/", estimatedSupport: "20%†", affected: "~310 million" },
  { region: "Europe", population: "744 million", source: "https://www.worldometers.info/world-population/europe-population/", estimatedSupport: "30%†", affected: "~223 million" },
  { region: "North America††", population: "600 million*", source: null, estimatedSupport: "35%†", affected: "~210 million" },
  { region: "South America", population: "438 million", source: "https://www.worldometers.info/world-population/south-america-population/", estimatedSupport: "30%†", affected: "~131 million" },
  { region: "Oceania", population: "46.6 million", source: "https://www.worldometers.info/world-population/oceania-population/", estimatedSupport: "25%†", affected: "~11.6 million" },
];


export default function PurposeClientPage() {
  const { toast } = useToast();
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [shareText, setShareText] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const currentSiteUrl = window.location.origin + "/purpose";
    setSiteUrl(currentSiteUrl);
    setShareText("Discover the purpose behind MyImaginaryFriends.AI - AI for reflection, creativity, and emotional wellness: " + currentSiteUrl);
  }, []);


  const handleCopyLink = () => {
    if (siteUrl) {
      navigator.clipboard.writeText(siteUrl)
        .then(() => {
          toast({ title: "Link Copied!", description: "The page URL has been copied to your clipboard." });
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          toast({ title: "Error", description: "Failed to copy link.", variant: "destructive" });
        });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Purpose
          </h1>
          <p className="mt-4 text-lg italic text-muted-foreground">
            A quiet space to understand why we built MyImaginaryFriends.AI — and how sharing it can help others, one thoughtful connection at a time.
          </p>
        </header>

        <Separator className="my-8" />

        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" /> A World in Need of Reflection
          </h2>
          <p className="text-muted-foreground">
            There are over <strong>8 billion people</strong> in the world (Source: <a href="https://www.macrotrends.net/global-metrics/population/world-population" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Macrotrends, 2025</a>).
            Behind every number is a life with unspoken thoughts, unprocessed emotions, or untold stories.
            Many feel overwhelmed, isolated, or creatively stifled — and too often, they face it all alone.
          </p>
          <p className="text-muted-foreground">
            We created <strong>MyImaginaryFriends.AI</strong> as a gentle answer to that silence.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" /> Why We Built This
          </h2>
          <p className="text-muted-foreground">
            As children, imaginary friends gave us space to think, feel, and explore without fear of judgment.
            As adults, we rarely find that kind of space again.
          </p>
          <p className="text-muted-foreground">Our apps are built to bring it back:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
            <li><strong>Bubbas.AI</strong> offers emotionally-aware conversations that listen, reflect, and support.</li>
            <li><strong>BubbaStickers.AI</strong> lets users express what words can&apos;t — through playful, creative image prompts.</li>
          </ul>
          <p className="text-muted-foreground">
            These are tools for <strong>reflection, creativity, and emotional wellness</strong> — designed with <strong>privacy</strong>, <strong>empathy</strong>, and <strong>intention</strong> at their core.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground">The Quiet Crisis</h2>
          <p className="text-muted-foreground">
            Too many people carry invisible struggles. Here’s what global mental health and population data suggests:
          </p>
          <Card className="mt-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Region</TableHead>
                      <TableHead>Verified Population (2025, approx.)</TableHead>
                      <TableHead className="text-center">*% Estimated to Need Support*</TableHead>
                      <TableHead className="text-right">People Affected</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {populationData.map((row) => (
                      <TableRow key={row.region}>
                        <TableCell className="font-medium">{row.region}</TableCell>
                        <TableCell>
                          {row.population}
                          {row.source && (
                            <a href={row.source} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 text-xs">(Source)</a>
                          )}
                        </TableCell>
                        <TableCell className="text-center">{row.estimatedSupport}</TableCell>
                        <TableCell className="text-right">{row.affected}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 text-sm text-muted-foreground space-y-1">
            <p>
              *Population numbers rounded from 2025 projections. Sources include Worldometer and Macrotrends.
            </p>
            <p>
              †&quot;Estimated to Need Support&quot; includes people experiencing emotional distress, loneliness, burnout, or sub-clinical wellness needs — not only those with diagnosed mental health conditions. Verified prevalence rates for diagnosed disorders are significantly lower (see: <a href="https://www.thelancet.com/gbd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Global Burden of Disease Study, 2019</a>).
            </p>
            <p>
              ††&quot;North America&quot; in this context includes Central America and the Caribbean for a broader regional scope.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-2">
            <MessageSquareHeart className="h-8 w-8 text-primary" /> The Power of a Gentle Share
          </h2>
          <p className="text-muted-foreground">
            We don’t believe in pressure. But we do believe in ripples.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5">
            <p className="text-lg italic text-primary">
              If <strong>you</strong> share this with one person who needs it — and they share it with one more — the ripple grows.
            </p>
          </blockquote>
          <p className="text-muted-foreground">
            A moment of quiet care can reach farther than any algorithm.
            A simple act of empathy can change someone’s day — or their life.
          </p>
          <p className="text-muted-foreground">
            Sometimes, the softest things have the strongest impact.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="space-y-6 mb-12 text-center">
          <h2 className="text-3xl font-semibold text-foreground">Our Invitation</h2>
          <p className="text-muted-foreground">
            We’re not asking you to promote anything.
            We’re inviting you to <strong>share something gentle</strong> — something that might help someone feel seen, supported, or inspired.
          </p>
          <Card className="bg-accent/20 border-accent/50 p-6 inline-block">
             <blockquote className="text-xl font-semibold text-accent">
                🧠 Share MyImaginaryFriends.AI with a friend who might need space to think, feel, or create.
            </blockquote>
          </Card>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={handleCopyLink} variant="outline" disabled={!isClient || !siteUrl}>
              <Copy className="mr-2 h-4 w-4" /> Copy This Link
            </Button>
            <Button asChild variant="outline" disabled={!isClient || !shareText}>
              <a href={isClient && shareText ? `https://wa.me/?text=${encodeURIComponent(shareText)}` : '#'} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Share on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" disabled={!isClient || !shareText}>
              <a href={isClient && shareText ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}` : '#'} target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" /> Post on X
              </a>
            </Button>
            <Button asChild variant="outline" disabled={!isClient || !siteUrl}>
              <a href={isClient && siteUrl ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}` : '#'} target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" /> Share on Facebook
              </a>
            </Button>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-2 justify-center">
             <Sparkles className="h-8 w-8 text-primary" /> Why &quot;MyImaginaryFriends.AI&quot;?
          </h2>
          <p className="text-muted-foreground">
            Because imagination is how we begin to heal.
            <br />
            Because privacy is how we begin to trust.
            <br />
            Because reflection is how we begin to grow.
          </p>
          <p className="text-muted-foreground">
            Imaginary friends helped us when we were young.
            <br />
            Now, they’re here again — reimagined with AI, for a new kind of self-discovery.
          </p>
          <p className="text-2xl font-semibold text-primary mt-4">
            They’re not real.
            <br />
            They’re <strong>better</strong> — because they’re <strong>yours.</strong>
          </p>
        </section>
      </div>
    </div>
  );
}

