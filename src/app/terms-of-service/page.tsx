
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Mail, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

const pageTitle = "MyImaginaryFriends.AI: Terms, Privacy, and Ethics Policy";
const pageDescription = "Review the comprehensive Terms of Service, Privacy Policy, and Ethics Policy for MyImaginaryFriends.AI and its applications, including Bubbas.AI and BubbaSticker.AI. Understand your rights, our data handling practices, and ethical commitments.";
const pageKeywords = "terms of service, privacy policy, ethics policy, MyImaginaryFriends.AI terms, Bubbas.AI terms, BubbaSticker.AI terms, user agreement, data rights, encryption policy, AI ethics";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords.split(', '),
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/terms-of-service',
    type: 'article',
    images: [
      {
        url: '/og-terms.png',
        width: 1200,
        height: 630,
        alt: 'MyImaginaryFriends.AI Terms, Privacy, and Ethics Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-terms.png'],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            MyImaginaryFriends.AI: Terms, Privacy, and Ethics Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Effective Date: April 10, 2025
          </p>
          <p className="text-md text-muted-foreground">
            Last Updated: May 20, 2025
          </p>
          <p className="mt-4 text-muted-foreground">
            This document explains how MyImaginaryFriends.AI works, what you can expect from us, and how we handle your information. It applies to all our apps, including Bubbas.AI and BubbaSticker.AI.
          </p>
        </header>

        <div className="space-y-8">
          <Section title="1. Welcome! What is MyImaginaryFriends.AI?">
            <p>
              MyImaginaryFriends.AI is your home for smart, emotionally aware AI tools, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>Bubbas.AI: Your personal AI journaling and emotional support friend.</li>
              <li>BubbaSticker.AI: A creative tool to generate unique images and stickers.</li>
            </ul>
            <p className="mt-2">
              By using our services, you confirm you are old enough to agree to these terms, either for yourself or on behalf of an organization. You also agree to the terms of any services we use from other companies, such as Google’s Terms and OpenAI’s Terms.
            </p>
          </Section>

          <Section title="2. What Our Apps Do (and Don’t Do)">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Bubbas.AI helps you reflect, journal, and use tools for emotional support.</li>
              <li>BubbaSticker.AI helps you create unique images and stickers for personal use or marketing.</li>
            </ul>
            <Card className="mt-6 border-destructive bg-destructive/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7 text-destructive" />
                  <CardTitle className="text-xl text-destructive">Important Disclaimer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-destructive/90 space-y-2">
                <p>
                  Our apps are <strong>not</strong> a replacement for professional therapy, medical advice, or legal help. If you need immediate assistance, please reach out to professional services. <Link href="#global-crisis-lines" className="underline hover:text-destructive/70">[See global crisis lines at the end of this document.]</Link>
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section title="3. Your Data & Privacy: We Put You First">
            <p>Your privacy is our top priority. Here’s how we protect your information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Minimal Data Collection: We collect only essential data, such as your email (for logging in), app preferences, and basic payment info. All payments are securely processed by Stripe; we never store your full payment details.</li>
              <li>Client-Side Encryption: All your journals, chats, voice recordings, and content you create are encrypted on your device using a passphrase you set up. Only you can unlock and read your data.</li>
              <li>No Raw Audio Storage: We transcribe your voice input and immediately discard the original audio.</li>
              <li>No Tracking or Selling: We do not use your data for advertising, profiling, or sell it to anyone.</li>
              <li>You Control Your Account: You can delete your account and all associated data at any time.</li>
              <li>Secure Infrastructure: We use trusted third-party services like Firebase and Stripe for secure data storage and payment processing. We never see or store your credit card details directly.</li>
            </ul>
            <div className="mt-4 p-4 border border-primary/50 rounded-md bg-primary/5">
                <h3 className="font-semibold text-foreground mb-2">Your Encryption Passphrase & Secret Recovery Key</h3>
                <p className="text-muted-foreground">When you set up your account, you’ll create a secure passphrase. This passphrase encrypts all your sensitive data—like journal entries, chat logs, and voice transcripts—before it’s stored on our servers.</p>
                <p className="text-muted-foreground mt-1">You’ll need this passphrase every time you log in to access your encrypted content.</p>
                <p className="text-muted-foreground mt-1"><strong>Crucial:</strong> After you create your passphrase, we’ll show you a Secret Recovery Key. This is your <strong>only way</strong> to recover your encrypted data if you ever forget your passphrase.</p>
                <p className="text-muted-foreground mt-1">We cannot decrypt your data for you. Please store your recovery key securely.</p>
            </div>
          </Section>

          <Section title="4. Your Rights as a User">
            <p>You have full control over your data. You can:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Access, download, or delete your data at any time.</li>
              <li>Cancel or change your subscription whenever you wish.</li>
              <li>Contact us with any questions or complaints at: <a href="mailto:Founder@MyImaginaryFriends.ai" className="text-primary hover:underline">Founder@MyImaginaryFriends.ai</a>.</li>
            </ul>
          </Section>

          <Section title="5. Our Ethics Policy: Designed for Your Well-being">
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>User-first: Our tools are built to support you, not manipulate.</li>
              <li>End-to-end encryption: Your personal reflections, chats, and voice transcripts are encrypted before storage.</li>
              <li>Minimal data collection: We only collect what’s necessary to provide our services.</li>
              <li>No “dark patterns”: You remain in control of your data and experience.</li>
              <li>Transparency: We’ll always keep you informed about major updates.</li>
            </ul>
          </Section>

          <Section title="6. Voice & AI Features">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Voice Input: Makes journaling and creating in Bubbas.AI easier and more intuitive.</li>
              <li>Encrypted Transcriptions: All transcribed voice data is encrypted immediately after conversion. We do not store raw audio.</li>
              <li>No Model Training: We do not use your voice content or transcriptions to train our AI models or for any purpose beyond providing the service you requested.</li>
            </ul>
          </Section>

          <Section title="7. Fair Use & Respect">
            <p>To keep our community safe and positive, you agree to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Use our apps as intended.</li>
              <li>Not misuse, reverse-engineer, or exploit our services or the AI models we use.</li>
              <li>Not upload or create content that is illegal, abusive, hateful, or discriminatory.</li>
              <li>Respect the experiences and privacy of other users.</li>
            </ul>
            <p className="mt-3">If you violate these rules, we may suspend or close your account.</p>
          </Section>

          <Section title="8. Subscriptions & Billing">
            <h3 className="font-semibold text-foreground text-lg mb-2">Bubbas.AI Plans</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Free Tier: Limited chat sessions, mood tracking, and data stored only on your device.</li>
              <li>Plus Tier ($10/month): Longer chat sessions, encrypted cloud journaling, and text-to-speech responses.</li>
              <li>Pro Tier ($20/month): Full AI memory, enhanced emotional intelligence, voice interaction, and deeper sentiment analysis.</li>
            </ul>
            <h3 className="font-semibold text-foreground text-lg mb-2">BubbaSticker.AI Plans</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Free Tier: Generate 5 images saved locally.</li>
              <li>Plus Tier ($5/month): 50 cloud-stored images per month and faster image generation.</li>
              <li>Pro Tier ($10/month): Up to 250 cloud images, faster processing, and watermark-free downloads.</li>
              <li>Ultra Tier ($20/month): Up to 500 cloud images, high-resolution exports, commercial usage rights, and early access to new features.</li>
            </ul>
          </Section>

          <Section title="9. Intellectual Property: You Own Your Creations">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You own the content you create—including journal entries, chat reflections, and AI-generated images—unless specified otherwise by third-party providers.</li>
                <li>We own our platform (code, branding, design).</li>
                <li>Respect our work: Do not resell, copy, or distribute any part of our apps without permission.</li>
                <li>Image Generation: You can use generated images personally or commercially, but we may limit or remove content that violates our ethical rules or laws.</li>
            </ul>
          </Section>

          <Section title="10. Limitation of Liability">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>We are not responsible for indirect or incidental damages, such as emotional harm, service outages, or data loss.</li>
                <li>All services are provided “as-is” and “as available.”</li>
                <li>While we strive for stability and security, we cannot guarantee uninterrupted or error-free access at all times.</li>
            </ul>
          </Section>

          <Section title="11. Indemnification">
            <p>By using our apps, you agree to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
                <li>Use them responsibly and according to these terms.</li>
                <li>Protect MyImaginaryFriends.AI, our team, and partners from any claims or responsibilities arising from:</li>
                <ul className="list-circle list-inside ml-4 space-y-1">
                    <li>Your misuse of our services.</li>
                    <li>Your violation of these terms.</li>
                    <li>Your infringement on others’ rights or applicable laws.</li>
                </ul>
            </ul>
          </Section>

          <Section title="12. Account Termination">
            <p>We may suspend or close accounts if:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
                <li>You violate these terms.</li>
                <li>A paid plan remains inactive for a long time (we’ll warn you first).</li>
                <li>It’s required by law.</li>
            </ul>
            <p className="mt-2">When an account is closed, all related data will be deleted within 30 days, unless legally required to retain it.</p>
          </Section>

          <Section title="13. Feedback">
            <p>We welcome your feedback, ideas, and suggestions! By sharing them, you give us permission to use them freely to improve our services, without any obligation to compensate you.</p>
          </Section>

          <Section title="14. Encryption & Data Security: How We Keep Your Data Safe">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Client-Side Encryption: All content you create—text, images, and responses—is encrypted on your device using your unique passphrase before being stored in our cloud database (Firebase). Neither MyImaginaryFriends.AI nor our partners (like Google) can access or decrypt your content without your passphrase.</li>
                <li>User-Controlled Keys: Only you hold the key to your data. Without your passphrase or recovery key, your data cannot be recovered or accessed by anyone—including us.</li>
                <li>AI Feature Data Handling: When you use AI features powered by third-party providers (like Google Gemini or OpenAI), your input is securely transmitted to those services for processing. Only the encrypted version is stored in our database; we do not store the unencrypted version. These providers process your request in plaintext to fulfill your request, and their privacy policies apply during processing.</li>
                <li>No Data for Model Training: We do not use your content to train AI models or for any purpose other than providing the service you requested.</li>
            </ul>
          </Section>

          <Section title="15. Legal Details">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>These terms are governed by the laws of the State of Oklahoma, USA.</li>
                <li>Any legal issues will be handled in Oklahoma County courts.</li>
                <li>If any part of these terms is found invalid, the rest will still apply.</li>
            </ul>
          </Section>

          <Section title="16. Policy Updates">
             <p>This document covers the Terms of Service, Privacy Policy, and Ethics Policy for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>MyImaginaryFriends.AI</li>
                <li>Bubbas.AI</li>
                <li>BubbaSticker.AI</li>
            </ul>
            <p className="mt-2">We may update these terms occasionally. If the changes are significant, we’ll notify you through the app or by email. By continuing to use our services, you accept the updated terms.</p>
          </Section>

          <Section title="17. Contact Us">
            <p>Questions, concerns, abuse reports, or data deletion requests?</p>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:Founder@MyImaginaryFriends.ai" className="text-primary hover:underline">
                Founder@MyImaginaryFriends.ai
              </a>
            </div>
            <p className="mt-1 text-muted-foreground">📍 Oklahoma City, OK</p>
          </Section>

          <Section title="18. Image Generation Usage Guidelines">
            <p>Both BubbaSticker.AI and Bubbas.AI use image generation tools powered by third-party AI providers like Google (Imagen, Gemini) and OpenAI (DALL·E). When you use these features, you must follow their rules in addition to ours.</p>
            <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">What You CAN Do:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Use generated images for personal and commercial purposes, as long as you follow all relevant laws and our partners’ policies.</li>
                <li>Use them for marketing, creative expression, digital art, or any other legal personal or business use.</li>
                <li>You generally own the rights to the images you generate, unless the third-party provider’s terms state otherwise.</li>
            </ul>
            <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">What You CANNOT Do:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Do not generate or use images that are illegal, abusive, hateful, or explicit.</li>
                <li>Do not use generated images to spread misinformation, impersonate others, or create “deepfakes.”</li>
                <li>Do not falsely claim copyright or authorship of images clearly created by AI tools.</li>
                <li>Do not violate any intellectual property laws or the terms set by Google or OpenAI.</li>
            </ul>
            <p className="mt-3">We reserve the right to limit or remove your access to image generation tools if you misuse them, and to report any illegal or harmful content to the proper authorities.</p>
          </Section>

          <Section title="19. Global Crisis Lines" id="global-crisis-lines">
            <ul className="space-y-2 text-muted-foreground">
                <li><strong>United States:</strong> 988 Suicide & Crisis Lifeline — Call or text 988</li>
                <li><strong>Canada:</strong> Talk Suicide Canada — Call 1-833-456-4566</li>
                <li><strong>United Kingdom:</strong> Samaritans — Call 116 123</li>
                <li><strong>Australia:</strong> Lifeline Australia — Call 13 11 14</li>
                <li><strong>New Zealand:</strong> Lifeline NZ — Call 0800 543 354</li>
                <li><strong>India:</strong> iCall — Email or call +91 9152987821</li>
                <li><strong>Germany:</strong> TelefonSeelsorge — Call 0800 1110111</li>
                <li><strong>France:</strong> SOS Amitié — Call 09 72 39 40 50</li>
                <li><strong>South Africa:</strong> SADAG — Call 0800 456 789</li>
            </ul>
          </Section>


          <Card className="mt-10 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                    By using our services, you agree to these terms and those of our partners (including Google and OpenAI). Thank you for being a thoughtful, imaginative part of our community!
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

function Section({ title, children, id }: SectionProps) {
  return (
    <section className="space-y-3 scroll-mt-20" id={id}>
      <h2 className="text-2xl font-semibold text-foreground border-b pb-2 mb-4">
        {title}
      </h2>
      <div className="text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}

    