import { ProductGrid } from '@/components/Cards';
import { Tabs } from '@/components/Interactive';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '키링·스티커·인형 굿즈 | 어푸어푸 프렌즈',
  description:
    '어푸어푸 프렌즈 키링, 스티커, 키링인형, 봉제인형을 만나보세요. 3,000원부터 시작하는 바다 친구들의 귀여운 일상 굿즈입니다.',
  alternates: { canonical: '/goods' },
  openGraph: {
    title: '키링·스티커·인형 굿즈 | 어푸어푸 프렌즈',
    description:
      '어푸어푸 프렌즈 키링, 스티커, 키リング인형, 봉제인형을 만나보세요. 3,000원부터 시작하는 바다 친구들의 귀여운 일상 굿즈입니다.',
    url: '/goods',
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

export default function Goods() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <h1>GOODS</h1>
          <p>어푸어푸 프렌즈와 함께하는 귀여운 일상</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {/* <Tabs labels={['전체', '인형/피규어', '문구', '패션', '키링']} /> */}
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
