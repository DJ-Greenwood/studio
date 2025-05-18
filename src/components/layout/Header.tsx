// Suggested code may be subject to a license. Learn more: ~LicenseLog:3628436248.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3309339658.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, ShieldCheck, Dog, Menu } from "lucide-react"; // Removed Wand2
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/apps-overview", label: "Apps", icon: LayoutGrid },
  { href: "/responsible-ai", label: "Responsible AI", icon: ShieldCheck },
  // { href: "/marketing-generator", label: "Marketing AI", icon: Wand2 }, // Removed this line
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, icon: Icon }: typeof navItems[0]) => (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
          pathname === href
            ? "text-primary bg-primary/10"
            : "text-foreground/70"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img src="/MyImaginaryFriends/Logo/MyImaginaryFrieds.AI.Logo.png" className="h-16 w-16 text-primary" alt="MyImaginaryFriends.AI Logo" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            MyImaginaryFriends.AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 pt-12 bg-background">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
