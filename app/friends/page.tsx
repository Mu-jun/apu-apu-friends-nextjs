import {FriendGrid} from '@/components/Cards'; import {Tabs} from '@/components/Interactive';
export default function Friends(){return <><section className="pageHero"><div className="container"><h1>FRIENDS</h1><p>어푸어푸 프렌즈의 귀여운 친구들을 소개합니다.</p></div></section><section className="section"><div className="container"><Tabs labels={['전체','바다 친구','육지 친구','신규 친구']}/><FriendGrid/></div></section></>}
