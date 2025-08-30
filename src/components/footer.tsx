import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Data Science', href: '#' },
    { name: 'Data2Insight', href: '#' },
    { name: 'Business Analyst', href: '#' },
    { name: 'AI/ML Solution', href: '#' },
    { name: 'Content Creator', href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  const contactLinks = [
    { name: 'Email', href: 'mailto:example@example.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0D1117] to-[#0A0D12] text-neutral-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <h3 className="font-headline text-lg font-semibold text-white mb-4">Mustefa Abrahim</h3>
                    <p className="text-sm">AI Engineer | Data Scientist</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Services We Provide</h4>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service.name}>
                                <Link href={service.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Social Media</h4>
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
                <div>
                    <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                        {contactLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
                <p>&copy; {currentYear} Mustefa Abrahim. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
