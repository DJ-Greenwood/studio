
'use client'; // Required for Dialog component

import { ShieldCheck, Users, Lock, Brain, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react"; // Added for React.Fragment
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const providerPolicies = [
  {
    provider: "OpenAI",
    defaultTraining: "No",
    optInRequired: "Yes",
    dataRetention: "Up to 30 days",
    policyLinks: [
      { name: "OpenAI Privacy", url: "https://openai.com/enterprise-privacy" },
      { name: "Usage Policies", url: "https://openai.com/policies/usage-policies" },
    ],
  },
  {
    provider: "Google Gemini",
    defaultTraining: "No (for paid users)",
    optInRequired: "Yes",
    dataRetention: "Not specified",
    policyLinks: [
      { name: "Gemini Terms", url: "https://policies.google.com/terms" },
      { name: "Usage Policies", url: "https://ai.google.dev/terms" },
    ],
  },
  {
    provider: "Hume.ai",
    defaultTraining: "No",
    optInRequired: "Not applicable",
    dataRetention: "Until user deletion",
    policyLinks: [
      { name: "Hume Data Policy", url: "https://dev.hume.ai/docs/privacy-and-data-usage" },
      { name: "Developer Docs", url: "https://dev.hume.ai/docs" },
    ],
  },
];

const brandCommitments = [
  "No surveillance or behavioral profiling",
  "No AI-generated content used without user consent",
  "Yearly transparency reports published",
  "Opt-out and data deletion available anytime",
];

const crisisLinesData = [
  {
    country: "🇺🇸 United States",
    infoLines: [
      "988 Suicide & Crisis Lifeline",
      "📞 Call or text 988",
      <React.Fragment key="us-web">🌐 <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://988lifeline.org</a></React.Fragment>
    ],
  },
  {
    country: "🇨🇦 Canada",
    infoLines: [
      "Talk Suicide Canada",
      "📞 Call 1-833-456-4566",
      "💬 Text 45645 (Available 4PM–Midnight ET)",
      <React.Fragment key="ca-web">🌐 <a href="https://talksuicide.ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://talksuicide.ca</a></React.Fragment>
    ],
  },
  {
    country: "🇬🇧 United Kingdom",
    infoLines: [
      "Samaritans",
      "📞 Call 116 123",
      <React.Fragment key="uk-web">🌐 <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.samaritans.org</a></React.Fragment>
    ],
  },
  {
    country: "🇦🇺 Australia",
    infoLines: [
      "Lifeline Australia",
      "📞 Call 13 11 14",
      <React.Fragment key="au-web">🌐 <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.lifeline.org.au</a></React.Fragment>
    ],
  },
  {
    country: "🇳🇿 New Zealand",
    infoLines: [
      "Lifeline Aotearoa",
      "📞 Call 0800 543 354",
      "💬 Text HELP to 4357",
      <React.Fragment key="nz-web">🌐 <a href="https://www.lifeline.org.nz" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.lifeline.org.nz</a></React.Fragment>
    ],
  },
  {
    country: "🇮🇳 India",
    infoLines: [
      "iCall (TISS)",
      "📞 +91 9152987821",
      "📧 icall@tiss.edu",
      <React.Fragment key="in-web">🌐 <a href="https://icallhelpline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://icallhelpline.org</a></React.Fragment>
    ],
  },
  {
    country: "🇩🇪 Germany",
    infoLines: [
      "TelefonSeelsorge",
      "📞 0800 1110111, 0800 1110222, or 116 123",
      <React.Fragment key="de-web">🌐 <a href="https://www.telefonseelsorge.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.telefonseelsorge.de</a></React.Fragment>
    ],
  },
  {
    country: "🇫🇷 France",
    infoLines: [
      "SOS Amitié",
      "📞 09 72 39 40 50",
      <React.Fragment key="fr-web">🌐 <a href="https://www.sos-amitie.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.sos-amitie.com</a></React.Fragment>
    ],
  },
  {
    country: "🇿🇦 South Africa",
    infoLines: [
      "SADAG (South African Depression and Anxiety Group)",
      "📞 0800 567 567 (Suicide Helpline)",
      "📞 0800 456 789 (Cipla Mental Health Line)",
      <React.Fragment key="za-web">🌐 <a href="https://www.sadag.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">https://www.sadag.org</a></React.Fragment>
    ],
  },
];


export default function ResponsibleAIClientPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Commitment to Responsible AI
          </h1>
          <p className="mt-2 text-md text-primary font-semibold">As a MyImaginaryFriends.ai initiative, we center privacy, ethics, and emotional integrity in every AI experience.</p>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            At MyImaginaryFriends.AI, we build digital tools that empower you to reflect, create, and grow—while upholding the highest standards of privacy and ethics.
          </p>
        </header>

        <Card id="disclaimer" className="mb-12 border-destructive bg-destructive/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
              <CardTitle className="text-2xl text-destructive">Disclaimer</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-destructive/90 space-y-3">
            <p>MyImaginaryFriends.AI and its applications (Bubbas.AI, BubbaStickers.AI) are not licensed therapy, mental health, or counseling services. Our AI companions are for general emotional support, journaling, and creative expression only.</p>
            <p>If you or someone you know is experiencing a mental health crisis, please seek professional help. In the U.S., contact the 988 Suicide & Crisis Lifeline by calling or texting 988, or visiting <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive/70">988lifeline.org</a>.</p>
            <div className="mt-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto text-destructive hover:text-destructive/80 underline text-base">
                    View Additional Global Crisis Lines
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Global Crisis Lines</DialogTitle>
                    <DialogDescription>
                      If you or someone you know is in crisis, please reach out to one of these resources. This list is not exhaustive.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                    {crisisLinesData.map((line) => (
                       <div key={line.country} className="mb-3">
                        <p className="font-semibold text-foreground">{line.country}</p>
                        <div className="text-sm text-muted-foreground">
                          {line.infoLines.map((info, index) => (
                            <React.Fragment key={index}>
                              {info}
                              {index < line.infoLines.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <section className="space-y-10">
          <PolicySection icon={Brain} title="AI Use Transparency">
            <p>All AI interactions are clearly labeled and disclosed within our apps. Whenever you interact with an AI system, you’ll see a clear indicator (such as an icon or label) so you always know when you’re engaging with AI.</p>
            <p className="mt-2">We believe in empowering users with knowledge about the technology they use.</p>
          </PolicySection>

          <PolicySection icon={Lock} title="Data Privacy">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>No personal data is ever sold or shared for marketing.</li>
              <li>Client-side encryption protects your sensitive content—only you can access it.</li>
              <li>We comply with major privacy regulations (GDPR, CCPA), giving you control over your data.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Users} title="Global Ethical Standards & AI Provider Selection">
            <p>At MyImaginaryFriends.AI, we do not build or train our own foundational AI models. We use trusted third-party AI providers (such as OpenAI, Google Gemini, Hume.ai, or others) who meet our strict privacy and ethical criteria. Our selection criteria include providers that:</p>
            <ul className="list-disc list-inside mt-3 mb-3 space-y-1 text-muted-foreground">
                <li>Do not use customer data for training their models by default.</li>
                <li>Employ robust data security and privacy-preserving practices.</li>
                <li>Are transparent about their AI and data policies.</li>
                <li>Align with global ethical standards for AI.</li>
            </ul>
            <p>We provide a secure environment for users to engage with these AI tools. What users write, generate, or explore is encrypted on their device — we cannot read or access it. Data sent to AI providers is only for processing the user’s request and is not stored by us in its unencrypted form.</p>
            <p className="mt-3">We are committed to creating a safe space where people can use AI for self-growth, emotional exploration, creative expression, and personal insight. While we don't directly control how foundational AI models are built, we align ourselves with providers that meet our ethical and privacy expectations and advocate for better standards industry-wide.</p>
          </PolicySection>

          <PolicySection icon={ExternalLink} title="AI Provider Disclosure">
            <p>We may use various third-party AI engines based on application needs and to enhance user experience. Each provider has publicly stated data use and retention policies, which we respect. These choices are made strategically to increase accessibility and responsible adoption of AI technologies. Policies are current as of May 2025. For the most up-to-date information, please consult the official documents linked below.</p>

            <div className="mt-6 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Default Data Usage for Training?</TableHead>
                    <TableHead>Opt-In Required?</TableHead>
                    <TableHead>Data Retention</TableHead>
                    <TableHead>Policy Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {providerPolicies.map((policy) => (
                    <TableRow key={policy.provider}>
                      <TableCell className="font-medium">{policy.provider}</TableCell>
                      <TableCell>{policy.defaultTraining}</TableCell>
                      <TableCell>{policy.optInRequired}</TableCell>
                      <TableCell>{policy.dataRetention}</TableCell>
                      <TableCell>
                        <ul className="space-y-1">
                          {policy.policyLinks.map(link => (
                            <li key={link.name}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1" aria-hidden="true">
                                {link.name} <ExternalLink className="h-3 w-3" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
             <p className="mt-4 text-sm text-muted-foreground">
              Note: See each provider’s website for the latest details. MyImaginaryFriends.AI is not responsible for external content.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldCheck} title="Brand Commitments">
            <p>We hold ourselves accountable to these commitments in all our endeavors:</p>
            <ul className="list-none mt-4 space-y-2">
              {brandCommitments.map((commitment, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>
          </PolicySection>
        </section>

        <section className="mt-16 pt-8 border-t text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our AI ethics and practices, please don't hesitate to reach out. We value open dialogue and feedback.
          </p>
          <p className="text-muted-foreground mt-1">
            Email: <a href="mailto:Founder@myimaginaryfriends.ai" className="text-primary hover:underline">Founder@myimaginaryfriends.ai</a>
          </p>
          <p className="text-muted-foreground mt-1">
            Registered office: Marietta, OK
          </p>
        </section>
      </div>
    </div>
  );
}

interface PolicySectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function PolicySection({ icon: Icon, title, children }: PolicySectionProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full mt-1" aria-hidden="true">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-2xl font-semibold text-foreground mb-1">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pl-[4.25rem] pr-6 pb-6 -mt-4">
         <div className="text-muted-foreground space-y-3">{children}</div>
      </CardContent>
    </Card>
  );
}
