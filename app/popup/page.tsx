import { EventGrid } from '@/components/Cards';
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
