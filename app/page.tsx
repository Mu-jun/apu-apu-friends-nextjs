import Image from 'next/image';
import Link from 'next/link';
import { FriendGrid, ProductGrid } from '@/components/Cards';
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
          <FriendGrid limit={5} />
          <div style={{ textAlign: 'center', marginTop: 25 }}>
            <Link className="btn btnBlue" href="/friends">
              친구들 더 보기 →
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: '#eef9ff' }}>
        <div className="container split">
          <div className="copy">
            <div className="eyebrow">STORY</div>
            <h2>모두 생명은 사랑스럽습니다</h2>
            <p>
              작고 귀여운 바다 친구들의 이야기를 통해 바다와 생명의 소중함을
              전합니다.
            </p>
            <Link className="btn btnBlue" href="/story">
              STORY 보기
            </Link>
          </div>
          <Image
            src="/assets/story-art.png"
            alt="바다 친구들"
            width={600}
            height={600}
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
        <div className="container oceanBox">
          <div className="eyebrow">OCEAN PROJECT</div>
          <h2>함께 바다를 지켜요</h2>
          <p>우리의 작은 행동이 바다의 큰 변화를 만듭니다.</p>
          <Image
            src="/assets/ocean-art.png"
            alt="바다 보호 프로젝트"
            width={700}
            height={430}
          />
        </div>
      </section>
    </>
  );
}
