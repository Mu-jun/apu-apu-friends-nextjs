import { ProductGrid } from '@/components/Cards';
import { Tabs } from '@/components/Interactive';
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
