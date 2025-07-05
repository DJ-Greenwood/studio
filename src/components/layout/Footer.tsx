
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-center space-x-2 text-xs">
          <AlertTriangle className="h-4 w-4 text-destructive/80" aria-hidden="true" />
          <span>Our AI tools are for support, not therapy.</span>
          <Link href="/responsible-ai#disclaimer" className="underline hover:text-primary transition-colors">
            Read full disclaimer.
          </Link>
        </div>
        <p className="mb-2">A product of <a href="https://www.MyImaginaryFriends.ai" className="underline hover:text-primary">MyImaginaryFriends.ai</a>—our parent company focused on human-first AI.</p>
        <p className="mb-2">&copy; 2025 MyImaginaryFriends.AI LLC. All rights reserved.</p>
        <div className="flex items-center space-x-3 text-xs mb-3">
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service & Privacy Policy
          </Link>
          <span className="text-muted-foreground/50" aria-hidden="true">•</span>
          <Link href="/responsible-ai" className="hover:text-primary transition-colors">
            Responsible AI Commitment & Ethics Statement
          </Link>
        </div>
        <p className="text-xs text-muted-foreground/80">Powered by Next.js hosted on Firebase</p>
      </div>
    </footer>
  );
}
