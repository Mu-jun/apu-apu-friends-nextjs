import { EventGrid } from '@/components/Cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팝업 & 체험 | 어푸어푸 프렌즈',
  description:
    '도심 속 작은 바다에서 어푸어푸 프렌즈를 직접 만나보세요. 팝업스토어, 전시, 주말 클래스 소식을 전해드립니다.',
  alternates: { canonical: '/popup' },
  openGraph: {
    title: '팝업 & 체험 | 어푸어푸 프렌즈',
    description:
      '도심 속 작은 바다에서 어푸어푸 프렌즈를 직접 만나보세요. 팝업스토어, 전시, 주말 클래스 소식을 전해드립니다.',
    url: '/popup',
    images: [
      {
        url: '/assets/hero.png',
        width: 1200,
        height: 630,
        alt: '어푸어푸 프렌즈',
      },
    ],
  },
};

export default function Popup() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <h1>POP-UP</h1>
          <p>어푸어푸 프렌즈를 직접 만나보세요!</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <EventGrid />
        </div>
      </section>
    </>
  );
}
