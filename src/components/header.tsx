"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Project Work" },
    { href: "/#projects", label: "Research" },
    { href: "/#publications", label: "Publication" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 19-7-5 7-5 7 5-7 5z"/><path d="m12 14-7-5 7-5 7 5-7 5z"/><path d="M19 10c0-2.2-3.1-4-7-4s-7 1.8-7 4"/><path d="m5 14 7 5 7-5"/></svg>
          <span className="font-headline text-lg font-bold">Mustefa Abrahim</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 19-7-5 7-5 7 5-7 5z"/><path d="m12 14-7-5 7-5 7 5-7 5z"/><path d="M19 10c0-2.2-3.1-4-7-4s-7 1.8-7 4"/><path d="m5 14 7 5 7-5"/></svg>
                    <span className="font-headline text-lg font-bold">Mustefa Abrahim</span>
                </Link>
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
