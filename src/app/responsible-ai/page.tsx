
import { ShieldCheck, Users, Lock, Brain, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const providerPolicies = [
  {
    provider: "OpenAI",
    defaultTraining: "No",
    optInRequired: "Yes",
    dataRetention: "Up to 30 days",
    policyLinks: [
      { name: "Enterprise Privacy", url: "https://openai.com/enterprise-privacy" }, // Example URL
      { name: "Data Usage", url: "https://openai.com/policies/usage-policies" }, // Example URL
    ],
  },
  {
    provider: "Google Gemini",
    defaultTraining: "No (for paid users)",
    optInRequired: "Yes",
    dataRetention: "Not specified",
    policyLinks: [
      { name: "Terms of Service", url: "https://policies.google.com/terms" }, // Example URL
      { name: "Usage Policies", url: "https://ai.google.dev/terms" }, // Example URL
    ],
  },
  {
    provider: "Hume.ai",
    defaultTraining: "No",
    optInRequired: "Not applicable",
    dataRetention: "Until user deletion",
    policyLinks: [
      { name: "Data Usage Policy", url: "https://dev.hume.ai/docs/privacy-and-data-usage" }, // Example URL
      { name: "Developer Docs", url: "https://dev.hume.ai/docs" }, // Example URL
    ],
  },
];

const brandCommitments = [
  "No surveillance or behavioral profiling",
  "No AI-generated content used without user consent",
  "Yearly transparency reports published",
  "Opt-out and data deletion available anytime",
];

export default function ResponsibleAIPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Commitment to Responsible AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            At MyImaginaryFriends.AI, we are dedicated to building human-centered AI that supports emotional well-being, inspires creativity, and fosters empathy.
          </p>
        </header>

        <Card id="disclaimer" className="mb-12 border-destructive bg-destructive/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <CardTitle className="text-2xl text-destructive">Disclaimer</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-destructive/90 space-y-3">
            <p>MyImaginaryFriends.AI and its applications (Bubbas.AI, BubbaSticker.AI) are not licensed therapy, mental health, or counseling services. Our AI companions are intended for general emotional support, journaling, and creative expression.</p>
            <p>If you or someone you know is experiencing a mental health crisis, please seek professional support. In the United States, you can contact the 988 Suicide & Crisis Lifeline by calling or texting 988, or visiting <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive/70">988lifeline.org</a>.</p>
          </CardContent>
        </Card>

        <section className="space-y-10">
          <PolicySection icon={Brain} title="AI Use Transparency">
            <p>All AI interactions within MyImaginaryFriends.AI applications are clearly labeled and disclosed. Users are always informed when they are interacting with an AI system. We believe in empowering users with knowledge about the technology they use.</p>
          </PolicySection>

          <PolicySection icon={Lock} title="Data Privacy">
            <p>Protecting your privacy is fundamental to our mission. We adhere to the following principles:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
              <li>No personal data is ever sold or shared with third parties for their marketing purposes.</li>
              <li>Client-side encryption is prioritized for sensitive content like chat logs, journal entries, and image data to ensure only you can access it.</li>
              <li>We design our systems to be compliant with major privacy regulations, including GDPR and CCPA, providing users with control over their data.</li>
            </ul>
          </PolicySection>
          
          <PolicySection icon={Users} title="Global Ethical Standards & AI Provider Selection">
            <p>At MyImaginaryFriends.AI, we do not build or train our own foundational AI models. Instead, we carefully select third-party AI providers (such as OpenAI, Google Gemini, Hume.ai, or others) that demonstrate a strong commitment to privacy, safety, and responsible AI development. Our selection criteria include:</p>
            <ul className="list-disc list-inside mt-3 mb-3 space-y-1 text-muted-foreground">
                <li>Commitment to not using customer data for training their models by default.</li>
                <li>Robust data security and privacy-preserving practices.</li>
                <li>Alignment with global ethical standards for AI.</li>
                <li>Transparency in their AI development and data handling policies.</li>
            </ul>
            <p>We provide a secure environment for users to engage with these AI tools. What users write, generate, or explore is handled with utmost care for privacy. We aim to choose AI partners that allow us to protect user privacy effectively.</p>
            <p className="mt-3">We are committed to creating a safe space where people can use AI for self-growth, emotional exploration, creative expression, and personal insight. While we don't directly control how foundational AI models are built, we align ourselves with providers that meet our ethical and privacy expectations and advocate for better standards industry-wide.</p>
          </PolicySection>

          <PolicySection icon={ExternalLink} title="AI Provider Disclosure & Data Usage">
            <p>We may use various third-party AI engines based on application needs and to enhance user experience. Each provider has publicly stated data use and retention policies, which we respect. These choices are made strategically to increase accessibility and responsible adoption of AI technologies. Policies are current as of May 2025. For the most up-to-date information, please consult the official documents linked below.</p>
            
            <div className="mt-6 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Default Data Usage for Training</TableHead>
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
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                                {link.name} <ExternalLink className="h-3 w-3" />
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
              Note: The links provided are for informational purposes. MyImaginaryFriends.AI is not responsible for the content of external sites.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldCheck} title="Brand Commitments">
            <p>We hold ourselves accountable to these commitments in all our endeavors:</p>
            <ul className="list-none mt-4 space-y-2">
              {brandCommitments.map((commitment, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {commitment}
                </li>
              ))}
            </ul>
          </PolicySection>
        </section>

        <section className="mt-16 pt-8 border-t text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our AI ethics and practices, please don't hesitate to reach out. We value open dialogue and feedback. You can contact us at <a href="mailto:ethics@myimaginaryfriends.ai" className="text-primary hover:underline">ethics@myimaginaryfriends.ai</a>.
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
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full mt-1">
            <Icon className="h-7 w-7" />
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
