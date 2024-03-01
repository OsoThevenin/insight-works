import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InsightWorks',
  description: 'All in one Agency Solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
