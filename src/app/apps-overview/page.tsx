
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sticker, Sparkles } from "lucide-react";

const apps = [
  {
    id: "bubbas-ai",
    name: "Bubbas.AI",
    tagline: "Your Friendly AI Companion",
    description: "Engage in meaningful conversations, explore new ideas, and enjoy a personalized AI experience with Bubbas.AI. Designed to be a supportive and insightful friend, Bubbas learns and adapts to your unique personality and interests.",
    icon: MessageCircle,
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Bubbas.AI interface",
    imageHint: "chatbot interface",
    features: [
      "Contextual conversations",
      "Personalized learning",
      "Creative brainstorming partner",
      "Daily check-ins and support",
    ],
    status: "In Development",
  },
  {
    id: "bubba-sticker-ai",
    name: "BubbaSticker.AI",
    tagline: "AI-Powered Sticker Generator",
    description: "Unleash your creativity with BubbaSticker.AI! Generate unique and expressive stickers for your chats and social media. Simply describe your idea, and our AI will bring it to life in sticker form.",
    icon: Sticker,
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "BubbaSticker.AI sticker examples",
    imageHint: "digital stickers",
    features: [
      "Text-to-sticker generation",
      "Various art styles",
      "Customizable sticker packs",
      "Easy export for popular apps",
    ],
    status: "Coming Soon",
  },
];

export default function AppsOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Our Creative AI Apps
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Discover the innovative AI-powered applications we're building to spark imagination and joy.
        </p>
      </div>

      <div className="space-y-16">
        {apps.map((app) => (
          <Card key={app.id} id={app.id} className="overflow-hidden shadow-xl transform transition-all hover:scale-[1.01] duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={app.imageUrl}
                  alt={app.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={app.imageHint}
                />
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <app.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="text-3xl font-bold text-foreground">{app.name}</CardTitle>
                  </div>
                  <CardDescription className="text-lg text-primary font-medium">{app.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground mb-6">{app.description}</p>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside mb-4">
                    {app.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-0 mt-auto flex justify-between items-center">
                   <span className="text-sm font-semibold py-1 px-3 rounded-full bg-accent text-accent-foreground">
                     {app.status}
                   </span>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10">
                    Learn More <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
