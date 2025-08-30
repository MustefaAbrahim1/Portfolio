import { Search, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 19-7-5 7-5 7 5-7 5z"/><path d="m12 14-7-5 7-5 7 5-7 5z"/><path d="M19 10c0-2.2-3.1-4-7-4s-7 1.8-7 4"/><path d="m5 14 7 5 7-5"/></svg>
          <span className="font-headline text-xl font-bold">Mustefa Abrahim</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Project Work</a>
          <a href="#research" className="text-foreground/80 hover:text-foreground transition-colors">Research</a>
          <a href="#publications" className="text-foreground/80 hover:text-foreground transition-colors">Publication</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="w-full rounded-lg bg-background pl-9" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
