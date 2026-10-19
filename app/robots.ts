import type { MetadataRoute } from 'next';

const SITE_URL = 'https://apu-apu-friends.vercel.app';

export default function robots(): MetadataRoute.Robots {
  // Vercel 프리뷰/개발 배포는 검색 노출 차단
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  const allow = ['/'];
  const disallow = ['/api/'];

  return {
    rules: [
      { userAgent: '*', allow, disallow },
      { userAgent: 'Googlebot', allow, disallow },
      { userAgent: 'Googlebot-Image', allow, disallow },
      { userAgent: 'Yeti', allow, disallow }, // 네이버 검색봇
      { userAgent: 'Daumoa', allow, disallow }, // 다음(카카오) 검색봇
      { userAgent: 'Bingbot', allow, disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
