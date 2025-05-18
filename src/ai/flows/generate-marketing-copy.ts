'use server';
/**
 * @fileOverview Generates unique marketing copy variations using GenAI, including social media strategies and downloadable templates.
 *
 * - generateMarketingCopy - A function that generates marketing copy.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the marketing copy.'),
  keyFeatures: z.string().describe('The key features or benefits to highlight.'),
  tone: z.string().describe('The desired tone of the marketing copy (e.g., professional, friendly, humorous).'),
  campaignGoal: z.string().describe('The primary goal of the marketing campaign (e.g., increase sales, brand awareness).'),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  marketingCopy: z.string().describe('The generated marketing copy.'),
  socialMediaStrategy: z.string().describe('A suggested social media strategy for the campaign.'),
  templateUrl: z.string().describe('A URL where a downloadable template for the marketing copy can be found, if applicable.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter.

  Based on the product, target audience, key features, tone, and campaign goal, generate unique marketing copy variations, a social media strategy, and a downloadable template URL if available.

  Product Name: {{{productName}}}
  Target Audience: {{{targetAudience}}}
  Key Features: {{{keyFeatures}}}
  Tone: {{{tone}}}
  Campaign Goal: {{{campaignGoal}}}

  Output the marketing copy, social media strategy, and template URL in a structured format.
  `,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
