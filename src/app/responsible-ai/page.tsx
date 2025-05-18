
import { ShieldCheck, Users, Lock, Brain } from "lucide-react";

export default function ResponsibleAIPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Commitment to Responsible AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            At MyImaginaryFriends.AI, we believe in harnessing the power of artificial intelligence ethically and responsibly. Our principles guide the development and deployment of our AI systems.
          </p>
        </header>

        <section className="space-y-10">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Fairness and Inclusivity</h2>
                <p className="text-muted-foreground">
                  We are dedicated to building AI systems that are fair and inclusive. We actively work to mitigate biases in our data and models to ensure our applications serve a diverse user base equitably. Our development process includes rigorous testing for fairness across different demographic groups.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full">
                <Lock className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Privacy and Security</h2>
                <p className="text-muted-foreground">
                  Protecting user data is paramount. We adhere to strict privacy-preserving techniques and robust security measures to safeguard personal information. We are transparent about the data we collect and how it is used, empowering users with control over their information.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full">
                <Brain className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Transparency and Explainability</h2>
                <p className="text-muted-foreground">
                  We strive for transparency in how our AI systems operate. While the complexities of AI can be challenging, we aim to provide understandable explanations for AI-driven decisions and outputs where possible. We believe users have a right to understand how AI impacts them.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-full">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Accountability and Oversight</h2>
                <p className="text-muted-foreground">
                  We take responsibility for the impact of our AI systems. We have established internal governance structures and oversight mechanisms to ensure our AI development aligns with our ethical principles. We are committed to continuous learning and improvement in our responsible AI practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our AI ethics and practices, please don't hesitate to reach out. We value open dialogue and feedback.
          </p>
          {/* Add a contact email or link here if desired */}
        </section>
      </div>
    </div>
  );
}
