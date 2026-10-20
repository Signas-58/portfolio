import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tsakane Sithole | Information Systems, AI & Systems Engineer',
  description:
    'Portfolio of Tsakane Sithole (BCom Honours Information Systems, Midlands State University). Experience in Metbank Digital Banking & Merchant Services, AI Voice Assistants (FRIDAY), and Offline-First Education Platforms (DzidzaAI).',
  keywords: [
    'Tsakane Sithole',
    'Information Systems',
    'Midlands State University',
    'Metbank',
    'Digital Banking',
    'AI Assistant FRIDAY',
    'DzidzaAI',
    'Data Analyst',
    'Systems Support',
    'Cybersecurity',
    'Zimbabwe Developer',
  ],
  authors: [{ name: 'Tsakane Sithole', url: 'https://github.com/Signas-58' }],
  openGraph: {
    title: 'Tsakane Sithole | Information Systems & AI Portfolio',
    description:
      'Explore projects, engineering case studies, and digital banking experience of Tsakane Sithole.',
    url: 'https://tsakanesithole.co.zw',
    siteName: 'TSakaneOS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tsakane Sithole | Information Systems & AI Portfolio',
    description:
      'Information Systems Honours graduate with Metbank digital banking experience and AI automation systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
