import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '어푸어푸 프렌즈',
  description: '깊은 바다에서 만난 가장 사랑스러운 친구들'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header /><main>{children}</main><Footer /></body></html>;
}
