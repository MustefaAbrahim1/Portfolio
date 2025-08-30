import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col sm:flex-row h-auto items-center justify-between p-4 md:p-6 gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {currentYear} Mustefa Abrahim. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
