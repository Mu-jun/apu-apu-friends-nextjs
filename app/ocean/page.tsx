export default function Ocean() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <div className="oceanBox">
            <h1>OCEAN PROJECT</h1>
            <h2>함께 바다를 지켜요</h2>
            <h3>우리가 살아가는 바다는 수많은 생물들의 소중한 집입니다.</h3>
            <h3>
              어푸어푸는 바다를 사랑하고 해양 생물을 보호하는 작은 실천을
              응원합니다.
            </h3>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="ocean">
          <h2>작은 실천이 만드는 큰 변화</h2>
          <p>일상에서 실천할 수 있는 작은 행동부터 시작해요.</p>
          <div className="featureList">
            <div className="feature">
              <div className="emoji">♻️</div>
              <strong>일회용 플라스틱</strong>
              <strong>줄이기</strong>
            </div>
            <div className="feature">
              <div className="emoji">🌊</div>
              <strong>바다를 깨끗하게</strong>
              <strong>해변 쓰레기 줍기</strong>
            </div>
            <div className="feature">
              <div className="emoji">🐠</div>
              <strong>해양 생명</strong>
              <strong>존중하기</strong>
            </div>
            <div className="feature">
              <div className="emoji">🤝</div>
              <strong>함께 실천하기</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
