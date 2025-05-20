
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react'; // Using Frown for a "not found" feel

export const metadata: Metadata = {
  title: '404 - Page Not Found | MyImaginaryFriends.AI',
  description: 'The page you are looking for could not be found on MyImaginaryFriends.AI.',
  robots: {
    index: false, // Don't index 404 pages
    follow: true, // Allow following links on 404 pages (like back to home)
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <Frown className="mb-8 h-24 w-24 text-primary/70" aria-hidden="true" />
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        404
      </h1>
      <p className="mb-6 text-2xl font-semibold text-foreground sm:text-3xl">
        Oops! Page Not Found
      </p>
      <img src="/MyImaginaryFriends/Logo/Page-not-found.png" alt="Illustration indicating page not found" className="mb-8 max-w-full h-auto" />
      <p className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl">
        It looks like the page you were trying to reach doesn&apos;t exist, or may have been moved.
        Don&apos;t worry, you can find your way back.
      </p>
      <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
        <Link href="/">
          Go Back to Homepage
        </Link>
      </Button>
    </div>
  );
}
