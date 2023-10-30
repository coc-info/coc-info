import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import './globals.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'COC INFO',
  description: 'COC INFO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
