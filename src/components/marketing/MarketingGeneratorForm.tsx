
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { generateMarketingCopy, GenerateMarketingCopyInput, GenerateMarketingCopyOutput } from "@/ai/flows/generate-marketing-copy";
import { Loader2, Wand2, FileText, Share2, Download } from "lucide-react";

const formSchema = z.object({
  productName: z.string().min(2, "Product name must be at least 2 characters.").max(100),
  targetAudience: z.string().min(10, "Target audience description is too short.").max(500),
  keyFeatures: z.string().min(10, "Key features description is too short.").max(1000),
  tone: z.string().min(2, "Tone must be at least 2 characters (e.g., 'Friendly').").max(50),
  campaignGoal: z.string().min(5, "Campaign goal is too short.").max(200),
});

type MarketingFormValues = z.infer<typeof formSchema>;

export function MarketingGeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateMarketingCopyOutput | null>(null);

  const form = useForm<MarketingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      targetAudience: "",
      keyFeatures: "",
      tone: "Professional",
      campaignGoal: "",
    },
  });

  async function onSubmit(values: MarketingFormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const aiInput: GenerateMarketingCopyInput = {
        productName: values.productName,
        targetAudience: values.targetAudience,
        keyFeatures: values.keyFeatures,
        tone: values.tone,
        campaignGoal: values.campaignGoal,
      };
      const response = await generateMarketingCopy(aiInput);
      setResult(response);
      toast({
        title: "Marketing Copy Generated!",
        description: "Your unique marketing content is ready.",
      });
    } catch (error) {
      console.error("Error generating marketing copy:", error);
      toast({
        title: "Error",
        description: "Failed to generate marketing copy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Wand2 className="h-7 w-7 text-primary" aria-hidden="true" />
            AI Marketing Copy Generator
          </CardTitle>
          <CardDescription>
            Fill in the details below to generate unique marketing copy, a social media strategy, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., SuperWidget Pro" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your ideal customer (e.g., tech-savvy millennials, small business owners)"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Features/Benefits</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List the main features or benefits to highlight (e.g., AI-powered, saves time, increases productivity)"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="tone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Tone</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Professional, Friendly, Humorous" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="campaignGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Goal</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Increase sales, Brand awareness" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" aria-hidden="true" />
                    Generate Copy
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6 mt-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                Generated Marketing Copy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-muted-foreground">{result.marketingCopy}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Share2 className="h-6 w-6 text-primary" aria-hidden="true" />
                Social Media Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-muted-foreground">{result.socialMediaStrategy}</p>
            </CardContent>
          </Card>

          {result.templateUrl && (
             <Card className="shadow-lg">
             <CardHeader>
               <CardTitle className="text-xl flex items-center gap-2">
                 <Download className="h-6 w-6 text-primary" aria-hidden="true" />
                 Downloadable Template
               </CardTitle>
             </CardHeader>
             <CardContent>
                {result.templateUrl.startsWith("http://") || result.templateUrl.startsWith("https://") ? (
                    <Button asChild variant="outline">
                        <a href={result.templateUrl} target="_blank" rel="noopener noreferrer">
                            Download Template
                        </a>
                    </Button>
                ) : (
                    <p className="text-muted-foreground">Template: {result.templateUrl} (Note: This is not a live URL. In a real app, provide a valid link.)</p>
                )}
             </CardContent>
           </Card>
          )}
        </div>
      )}
    </div>
  );
}
