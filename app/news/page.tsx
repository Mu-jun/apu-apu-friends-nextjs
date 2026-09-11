import {NewsList} from '@/components/Cards'; import {Tabs} from '@/components/Interactive';
export default function News(){return <><section className="pageHero"><div className="container"><h1>NEWS</h1><p>어푸어푸 프렌즈의 새로운 소식</p></div></section><section className="section"><div className="container"><Tabs labels={['전체','공지','이벤트','뉴스']}/><NewsList/></div></section></>}
