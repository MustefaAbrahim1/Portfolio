import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Mail', icon: Mail, href: 'mailto:example@example.com' },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#0D1117] to-[#0A0D12] text-neutral-300">
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-headline text-lg font-semibold text-white">Mustefa Abrahim</h3>
                    <p className="text-sm">AI Engineer | Data Scientist | Motivator</p>
                </div>
                <div className="flex gap-4">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                            aria-label={link.name}
                        >
                            <link.icon className="h-6 w-6"/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="mt-8 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
                <p>&copy; {currentYear} Mustefa Abrahim. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
