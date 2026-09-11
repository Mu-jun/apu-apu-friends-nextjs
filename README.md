# 어푸어푸 프렌즈 — Next.js + Vercel

기존 HTML/CSS 사이트를 Next.js App Router + TypeScript 구조로 변환한 프로젝트입니다.

## 기술 스택
- Next.js 16.3.3 (Active LTS)
- React 19.2
- TypeScript
- App Router
- Vercel 배포 대응

## 실행
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000` 접속.

## 프로덕션 확인
```bash
npm run build
npm run start
```

## Vercel 배포
GitHub에 이 프로젝트를 올린 뒤 Vercel에서 Repository를 Import하면 됩니다. Framework는 Next.js로 자동 인식됩니다.

## 라우트
- `/` HOME
- `/story` STORY
- `/friends` FRIENDS
- `/goods` GOODS
- `/popup` POP-UP
- `/ocean` OCEAN PROJECT
- `/news` NEWS

## 이미지
`public/assets`에 시안에서 추출한 이미지를 넣었습니다.
