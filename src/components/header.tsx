import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 19-7-5 7-5 7 5-7 5z"/><path d="m12 14-7-5 7-5 7 5-7 5z"/><path d="M19 10c0-2.2-3.1-4-7-4s-7 1.8-7 4"/><path d="m5 14 7 5 7-5"/></svg>
          <span className="font-headline text-xl font-bold">Portfolio-Web</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
