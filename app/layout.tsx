import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  verification: {
    google: '5416n2Zd6xOF-sDz3ydI39tg8kLwoMw7YgwFVk_q-4U',
  },
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C39MX8VT4Y"
      ></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-C39MX8VT4Y');
      `}
      </script>
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
