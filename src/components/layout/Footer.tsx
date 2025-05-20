
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-center space-x-2 text-xs">
          <AlertTriangle className="h-4 w-4 text-destructive/80" />
          <span>Our AI tools are for support, not therapy.</span>
          <Link href="/responsible-ai#disclaimer" className="underline hover:text-primary transition-colors">
            Read full disclaimer.
          </Link>
        </div>
        <p className="mb-1">
          Bubbas.AI and BubbaStickers.AI are products of MyImaginaryFriends.AI LLC, a registered company dedicated to building emotionally supportive and creative AI tools.
        </p>
        <p className="mb-2">&copy; 2025 MyImaginaryFriends.AI LLC. All rights reserved.</p>
        <p className="text-xs mb-2">Powered by GenAI and Next.js</p>
        <div className="flex space-x-4">
          <Link href="/responsible-ai" className="hover:text-primary transition-colors">
            Responsible AI Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
