import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    );
}


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <a href="/" className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 19-7-5 7-5 7 5-7 5z"/><path d="m12 14-7-5 7-5 7 5-7 5z"/><path d="M19 10c0-2.2-3.1-4-7-4s-7 1.8-7 4"/><path d="m5 14 7 5 7-5"/></svg>
                <span className="font-headline text-xl font-bold">DataWise</span>
            </a>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} DataWise. All rights reserved.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Service We provide</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Data2Insight</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Business Analyst</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">AI Agent /Automation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><TelegramIcon className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><WhatsAppIcon className="h-6 w-6" /></a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><a href="mailto:example@example.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" /> Email</a></li>
                <li><a href="https://linkedin.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
                <li><a href="https://github.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}