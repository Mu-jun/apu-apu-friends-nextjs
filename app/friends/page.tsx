import { FriendGrid } from '@/components/Cards';
import { Tabs } from '@/components/Interactive';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '바다 친구들 소개 | 어푸어푸 프렌즈',
  description:
    '앵푸, 뽁뽁, 엔델, 쪼비, 말랑, 뭉어, 나리, 송이, 통이. 서로 다른 파도를 가진 어푸어푸 프렌즈 아홉 친구를 만나보세요.',
  alternates: { canonical: '/friends' },
  openGraph: {
    title: '바다 친구들 소개 | 어푸어푸 프렌즈',
    description:
      '앵푸, 뽁뽁, 엔델, 쪼비, 말랑, 뭉어, 나리, 송이, 통이. 서로 다른 파도를 가진 어푸어푸 프렌즈 아홉 친구를 만나보세요.',
    url: '/friends',
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

export default function Friends() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <h1>FRIENDS</h1>
          <p>어푸어푸 프렌즈의 귀여운 친구들을 소개합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {/* <Tabs labels={['전체', '바다 친구', '육지 친구', '신규 친구']} /> */}
          <FriendGrid />
        </div>
      </section>
    </>
  );
}
