
import { MarketingGeneratorForm } from "@/components/marketing/MarketingGeneratorForm";

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
