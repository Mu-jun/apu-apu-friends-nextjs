import Image from 'next/image';
import Link from 'next/link';
import { FriendGrid, ProductGrid } from '@/components/Cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '어푸어푸 프렌즈 | 바다에서 만난 사랑스러운 친구들',
  description:
    '건강한 관계를 위한 콘텐츠와 커뮤니티, 어푸어푸 프렌즈. 개성 넘치는 바다 친구들의 이야기와 굿즈, 팝업 소식을 만나보세요.',
  openGraph: {
    title: '어푸어푸 프렌즈 | 바다에서 만난 사랑스러운 친구들',
    description:
      '건강한 관계를 위한 콘텐츠와 커뮤니티, 어푸어푸 프렌즈. 개성 넘치는 바다 친구들의 이야기와 굿즈, 팝업 소식을 만나보세요.',
    url: '/',
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

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="container heroInner">
          <div className="heroCopy">
            <h1>
              깊은 바다에서 만난
              <br />
              가장 사랑스러운 친구들
            </h1>
            <p>
              어푸어푸 프렌즈와 함께
              <br />
              신비로운 바다 이야기를 만나보세요.
            </p>
            <div className="heroActions">
              <Link className="btn btnWhite" href="/story">
                어푸어푸 이야기 보기
              </Link>
              <Link className="btn btnSoft" href="/friends">
                친구들 만나기
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">FRIENDS</div>
            <h2>🫧 어푸어푸 프렌즈를 소개합니다 🐚</h2>
            <p>바다에서 만난 개성 넘치는 친구들을 만나보세요.</p>
          </div>
          <FriendGrid limit={4} />
          <div style={{ textAlign: 'center', marginTop: 25 }}>
            <Link className="btn btnBlue" href="/friends">
              친구들 더 보기 →
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: '#eef9ff' }}>
        <div className="container split">
          <div className="copy" style={{ textAlign: 'center' }}>
            <div className="eyebrow">STORY</div>
            <p>사람과 사람 사이에</p>
            <p>조금 더 건강한 파도를 만듭니다.</p>
            <Link
              className="btn btnBlue"
              style={{ marginTop: '0.5rem' }}
              href="/story"
            >
              STORY 보기
            </Link>
          </div>
          <Image
            className="storyArt"
            loading="eager"
            src="/assets/story-art.png"
            alt="바다 친구들"
            width={0}
            height={0}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">GOODS</div>
            <h2>어푸어푸 굿즈</h2>
          </div>
          <ProductGrid />
        </div>
      </section>
      <section className="section ocean">
        <div className="container">
          <div className="oceanBox">
            <div className="eyebrow">OCEAN PROJECT</div>
            <p>관계의 파도 속에서</p>
            <p>허우적대고, 삐지고, 서운해하고, </p>
            <p>그래도 다시 서로에게 손을 내미는</p>
            <p>어푸어프 프렌즈를 만나보세요.</p>
            <Image
              className="oceanBoxImg"
              loading="eager"
              src="/assets/ocean-art.png"
              alt="오션 아트"
              width={0}
              height={0}
            />
          </div>
        </div>
      </section>
    </>
  );
}
