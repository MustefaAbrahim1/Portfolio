import type {Metadata} from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import MagicCursor from '@/components/magic-cursor';
import { Poppins, Roboto } from 'next/font/google'
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustefa Abrahim | Portfolio',
  description: 'M.Tech Data Science @ IIT Madras | AI Researcher | DL Engineer | ML Engineer | Data Analyst',
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MagicCursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
