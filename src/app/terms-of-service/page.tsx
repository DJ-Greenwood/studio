
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Mail, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            MyImaginaryFriends.AI – Terms, Privacy & Ethics
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Effective Date: April 10, 2025 (Updated: May 18, 2025)
          </p>
        </header>

        <div className="space-y-8">
          <Section title="1. Welcome to MyImaginaryFriends.AI">
            <p>
              MyImaginaryFriends.AI is the home of thoughtful, emotionally intelligent AI applications — including Bubbas.AI and BubbaSticker.AI. By using our products, you agree to the terms below, which reflect our strong commitment to privacy, safety, and ethical technology.
            </p>
          </Section>

          <Section title="2. What Our Apps Are (and Aren’t)">
            <p>
              Apps like Bubbas.AI are built to support journaling, reflection, and creativity — helping users grow emotionally, mentally, and imaginatively.
            </p>
            <Card className="mt-6 border-destructive bg-destructive/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7 text-destructive" />
                  <CardTitle className="text-xl text-destructive">Important Disclaimer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-destructive/90 space-y-2">
                <p>
                  Our apps are <strong>not</strong> substitutes for therapy, professional medical advice, or crisis support. If you need urgent help, contact professional services like the <strong>988 Suicide & Crisis Lifeline</strong> in the U.S. (call or text 988, or visit <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive/70">988lifeline.org</a>).
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section title="3. Your Data & Privacy">
            <p>We design our apps to respect and protect your privacy at every level:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>We collect only what's essential: email (for login), settings/preferences, and payment information if applicable.</li>
              <li>Reflections, journals, and chat logs are <strong>encrypted on your device</strong> before being saved. We cannot read them.</li>
              <li>Voice features convert speech to text — raw audio is not stored.</li>
              <li>Transcripts may be encrypted before storage to preserve privacy.</li>
              <li>We do <strong>not</strong> sell, share, or use your data for advertising.</li>
              <li>You may delete your account and all associated data at any time.</li>
            </ul>
            <p className="mt-3">
              We use trusted infrastructure (e.g., Firebase, Stripe) with strong encryption. We never see or store your credit card details.
            </p>
          </Section>

          <Section title="4. Your Rights">
            <p>You always have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>View, download, or delete your data</li>
              <li>Cancel your subscription or downgrade your plan</li>
              <li>Adjust privacy settings and permissions</li>
              <li>Contact us with any data or ethics concerns</li>
            </ul>
            <p className="mt-3">
              Email us at: <a href="mailto:Founder@myimaginaryfriends.ai" className="text-primary hover:underline">Founder@myimaginaryfriends.ai</a>
            </p>
          </Section>

          <Section title="5. Ethics Policy">
            <p>Our approach to AI is grounded in ethical transparency and user trust:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>🤝 <strong>User-first by design</strong> — Our decisions are guided by emotional safety and user dignity.</li>
              <li>🔐 <strong>Privacy through encryption</strong> — We encrypt reflections and data before storing.</li>
              <li>🧠 <strong>Data minimalism</strong> — We only collect what's necessary.</li>
              <li>🚫 <strong>No manipulation</strong> — No dark patterns. No deceptive AI behavior.</li>
              <li>📢 <strong>Transparency</strong> — We disclose all major changes in data handling.</li>
            </ul>
          </Section>

          <Section title="6. Voice & AI Features">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>🎙️ Voice input is used to enhance journaling and creative expression.</li>
              <li>🔐 Voice transcriptions may be encrypted — raw audio is never stored.</li>
              <li>❌ We do not retain voice recordings.</li>
            </ul>
          </Section>

          <Section title="7. Fair Use & Respect">
            <p>By using our apps, you agree to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Use them respectfully and in line with their intended purpose</li>
              <li>Avoid using them for harm, illegal activities, or abuse</li>
              <li>Respect the experiences and privacy of others</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend access if necessary to maintain a safe space.
            </p>
          </Section>

          <Section title="8. Subscriptions & Billing">
            <p>
              Some features require a paid plan. Billing is handled securely by Stripe. You can cancel or modify your plan anytime. No hidden fees.
            </p>
          </Section>

          <Section title="9. Updates to These Terms">
            <p>
              These terms, along with our privacy and ethics policies, may be updated periodically. If we make significant changes, we’ll notify users through the app or email.
            </p>
          </Section>

          <Section title="10. Contact">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>Email:</span>
              <a href="mailto:Founder@myimaginaryfriends.ai" className="text-primary hover:underline">
                Founder@myimaginaryfriends.ai
              </a>
            </div>
            <p className="mt-3 text-muted-foreground">
              We welcome your feedback and are always working to make our platform safer, smarter, and more human-centered.
            </p>
          </Section>

          <Card className="mt-10 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  By using MyImaginaryFriends.AI and its associated applications, you agree to these terms. We commit to honoring your voice, creativity, and privacy with care and intention.
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
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-foreground border-b pb-2 mb-4">
        {title}
      </h2>
      <div className="text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}
