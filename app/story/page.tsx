import Image from 'next/image';
export default function Story() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <h1>STORY</h1>
          <p>어푸어푸 프렌즈가 전하는 따뜻한 바다 이야기</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="copy">
            <h2>사람과 사람 사이에</h2>
            <h2>조금 더 건강한 파도를 만듭니다.</h2>
            <h3>우리는 어떤 회사인가요?</h3>
            <strong>어푸풀은 건강한 인간관계를 경험할 수 있는</strong>
            <br />
            <strong>콘텐츠와 커뮤니티를 만드는 라이프스타일 기업입니다.</strong>
            <p>
              <br />
            </p>
            <p>사람을 만나고 싶지만</p>
            <p>상처받기는 싫고,</p>
            <br />
            <p>친해지고 싶지만</p>
            <p>내 경계를 잃고 싶지는 않고,</p>
            <br />
            <p>혼자 있고 싶을 때도 있지만</p>
            <p>외롭고 싶지는 않은 사람들.</p>
            <br />
            <p>어푸풀은 이런 사람들을 위해</p>
            <p>
              <strong>“나도 편하고, 너도 편한 관계”</strong>를 만들어갑니다.
            </p>
          </div>
          <Image
            src="/assets/story-art.png"
            alt="어푸어푸 스토리"
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="container flex-center">
          <div className="featureList">
            <div className="feature">
              <div className="emoji">💗</div>
              <strong>서로 사랑해요</strong>
            </div>
            <div className="feature">
              <div className="emoji">🐳</div>
              <strong>서로 이해해요</strong>
            </div>
            <div className="feature">
              <div className="emoji">⭐</div>
              <strong>다함께 행복해요</strong>
            </div>
            <div className="feature">
              <div className="emoji">🐚</div>
              <strong>함께 웃어요</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
