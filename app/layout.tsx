import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://apu-apu-friends.vercel.app'),
  openGraph: {
    siteName: '어푸어푸 프렌즈',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <GoogleTagManager gtmId="GTM-TQJKD8TG" />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
