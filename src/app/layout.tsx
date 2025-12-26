import './globals.css';
import { Navbar } from '@components/ui/navbar';
import { Footer } from '@components/ui/footer';
import type { Metadata } from 'next';
import { FontTitle, FontSubtitle, FontText } from '@/lib/font';

export const metadata: Metadata = {
  title: 'FMADRID | Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${FontTitle.variable} ${FontSubtitle.variable} ${FontText.variable} bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
