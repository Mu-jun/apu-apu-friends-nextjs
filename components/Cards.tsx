import Image from 'next/image';
import { friends, products, events, news } from './data';

export function FriendGrid({ limit }: { limit?: number }) {
  const list = limit ? friends.slice(0, limit) : friends;
  return (
    <div className="grid grid4">
      {list.map(([c, n, d]) => (
        <article className="card friendCard" key={n}>
          <Image className="friendIcon" src={c} alt={n} width={0} height={0} />
          <h3>{n}</h3>
          {/* <p>{d}</p> */}
        </article>
      ))}
    </div>
  );
}

export function ProductGrid() {
  return (
    <div className="grid grid3">
      {products.map(([n, p, e]) => (
        <article className="card" key={n}>
          <Image className="productImg" src={e} alt={n} width={0} height={0} />
          <div className="cardBody">
            <h3>{n}</h3>
            <div className="price">{p}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
export function EventGrid() {
  return (
    <div className="grid grid3">
      {events.map(([t, d, desc]) => (
        <article className="card" key={t}>
          <Image
            className="eventImg"
            src="/assets/hero.png"
            alt="어푸어푸 프렌즈"
            width={640}
            height={380}
          />
          <div className="cardBody">
            <h3>{t}</h3>
            <div className="newsDate">{d}</div>
            <p>{desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
export function NewsList() {
  return (
    <>
      {news.map(([t, d]) => (
        <article className="newsItem" key={t}>
          <div>
            <h3>{t}</h3>
            <p>어푸어푸 프렌즈의 새로운 소식을 전해드립니다.</p>
            <div className="newsDate">{d}</div>
          </div>
          <Image
            src="/assets/hero.png"
            alt="어푸어푸 프렌즈"
            width={320}
            height={200}
          />
        </article>
      ))}
    </>
  );
}
