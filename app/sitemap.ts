import type { MetadataRoute } from 'next';

const SITE_URL = 'https://apu-apu-friends.vercel.app';

type Page = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  lastModified: string; // 실제로 내용이 바뀐 날짜로 관리
};

const pages: Page[] = [
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
  {
    path: '/story',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
  {
    path: '/friends',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
  {
    path: '/goods',
    priority: 0.9,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
  {
    path: '/popup',
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
  {
    path: '/ocean',
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: '2026-10-19',
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
