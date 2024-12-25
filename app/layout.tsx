import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';
import { QueryClientProvider } from '@/app/libs';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coxwave Technical Assignment',
  description: 'Coxwave frontend engineer technical assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <QueryClientProvider>
          <div className="container mx-auto">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
