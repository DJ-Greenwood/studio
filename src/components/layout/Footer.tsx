
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>&copy; {currentYear} MyImaginaryFriends.AI. All rights reserved.</p>
        <div className="mt-4 flex space-x-4 sm:mt-0">
          <Link href="/responsible-ai" className="hover:text-primary transition-colors">
            Responsible AI Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
