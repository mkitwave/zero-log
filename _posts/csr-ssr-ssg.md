---
title: "CSR SSR SSG 뽀개기"
excerpt: "이제는 알아야 한다"
date: "2023-11-05"
tags:
  - WEB
coverImage: "/assets/blog/csr-ssr-ssg/cover.jpg"
ogImage:
  url: "/assets/blog/csr-ssr-ssg/cover.jpg"
---

## 목표

- CSR/SSR/SSG의 개념과 동작 방식을 알아보자
- 각각의 장단점을 알아보자
- (심화) 성능 지표로 렌더링 방식을 비교해보자

## CSR

### 개념

- Client-side Rendering
- 브라우저에서 JavaScript를 실행해 모든 DOM을 렌더링한다.
- **SPA**(Single Page Application)로 동작한다.

### 동작 방식

[참고하면 좋은 영상](https://youtu.be/4-Lel1oaV7M?si=36cLtt2deTsEE4Rg)

1. 첫 페이지 로드 시 클라이언트는 CDN에서 script, style 태그만이 포함된 HTML 페이지를 로드받는다. (유저 입장에서는 빈 페이지가 보이게 된다)

```html
<html>
  <head>
    ...
  </head>
  <body>
    <div id="root">
      <!-- 이 시점엔 내부 컨텐츠가 비어있어요. -->
    </div>
  </body>
</html>
```

2. 로드된 HTML 페이지의 script 태그 내용 기반으로 JavaScript 번들을 불러온다.
3. 불러온 번들을 브라우저에서 실행해 컨텐츠가 로드된다.
4. 데이터 fetch 또한 브라우저에서 실행된다.
5. 유저가 새로운 페이지로 이동하면 새로운 레이아웃이 바로 렌더링된다. (2번 과정에서 모든 JavaScript 번들을 불러왔기 때문)
6. 이후의 데이터 fetch 도 브라우저에서 실행된다.

### 사용 예시

- React, Vue, Angular 등의 기본 동작

## (Full) SSR

### 개념

- Server-side Rendering
- **서버에서 페이지 로직과 렌더링을 모두 수행** 후, 브라우저에 정적 HTML을 전달한다.

### 동작 방식

[참고하면 좋은 영상](https://www.youtube.com/watch?v=0bvo6UKkNDA)

1. 클라이언트가 서버에 첫 번째 페이지를 요청한다.
2. 서버에서 필요한 데이터를 fetch 후, 컨텐츠를 렌더링한다.
3. 클라이언트에서는 컨텐츠가 모두 렌더링된 정적 HTML을 전달받는다.
4. 유저가 새로운 페이지로 이동하면 1-3번까지의 과정을 다시 반복한다.

## Universal Rendering

### 개념

- SSR + CSR
- 유저의 첫 요청 시에만 SSR을 수행하고, **hydration 과정을 거친 후엔 CSR처럼 동작**한다.
- **hydration**: 브라우저의 앱 상태를 페이지 렌더링 중 서버에서 생성한 상태와 동기화하는 작업
- 요즘 문서들에서는 SSR = Universal Rendering 으로 설명하는 케이스가 많은 것 같다.

### 동작 방식

[참고하면 좋은 영상](https://youtu.be/y5CpKiH-3J8?si=e4GELWxwqyi-VIuW)

1. 클라이언트가 서버에 첫 번째 페이지를 요청한다.
2. 서버에서 필요한 데이터를 fetch 후, 컨텐츠를 렌더링한다.
3. 클라이언트에서는 컨텐츠가 모두 렌더링된 정적 HTML을 전달받는다. (SSR 동작 방식의 1-3번과 동일)
4. 추가적으로, JavaScript 번들을 fetch해 hydration 과정을 거친다. (이 과정을 거치기 전까진, JavaScript 동작을 사용할 수 없다.)
5. hydration 이후, 유저는 페이지와 상호작용할 수 있으며 앱은 SPA처럼 동작한다.
6. 새로운 페이지로 이동하면 새로운 레이아웃이 바로 렌더링된다.

### 예시

- Next.js, Nuxt.js, Angular Universal

## SSG

### 개념

- Static Site Generation
- **빌드 시점**에 페이지 컨텐츠를 모두 미리 생성해둔다.

### 동작 방식

[참고하면 좋은 영상](https://www.youtube.com/watch?v=1zhT23VDVDc)

1. 빌드 시점에 렌더링 및 데이터 fetch를 모두 완료해 모든 페이지가 정적인 상태로 존재한다.
2. 클라이언트는 CDN으로부터 미리 렌더링된 페이지를 즉시 전송한다.
3. 유저가 새 페이지로 이동해도 2번의 동작을 반복한다.

### 예시

- Gatsby, Next.js(getStaticProps, getStaticPaths)

### ISR

- Incremental Static Regeneration
- SSG의 기본 동작과 동일하지만, **일정 시점마다 데이터를 다시 fetch**한다.
- Next.js 에서는 getStaticProps 의 revalidate 속성을 사용할 수 있다.

## 장단점

- 앱의 모든 정적 리소스를 불러와야 하는 CSR에 비해, 현재 페이지에 대한 리소스만 불러오면 되는 **SSR이 첫 번째 페이지 로드가 일반적으로 빠르다**.
- 그러나 다른 페이지로 이동 시 SSR은 서버에서 새롭게 리소스를 불러와야 하는데, CSR은 SPA, 즉 여러 페이지처럼 보이지만 실상 하나의 앱이기 때문에 추가 리소스를 불러올 필요 없이 바로 페이지가
  렌더링된다.
- **CSR에는 SEO(검색 엔진 최적화) 이슈가 존재**한다. JavaScript 분석 능력이 없는 크롤러 봇들은 초기 로딩 시 빈 HTML 컨텐츠가 로드되는 CSR 환경에서 정보를 잘 인식하지 못한다.
- SSR, CSR 각각의 단점을 해소하고 장점은 챙기고 싶어 나오게 된 방식이 **Universal Rendering**이다.
- 하지만 Universal Rendering 에도 hydration 과정 전까지는 페이지와 상호작용할 수 없다는 단점이 존재한다.
- SSG는 첫 번째 페이지 로드 시에도, 다른 페이지로 이동 시에도 빠르다는 장점이 있지만 빌드 시점에 데이터 fetch 가 이루어지기 때문에 항상 **최신 데이터를 유지해야 하는 페이지에선 사용할 수 없다**.

## 이런 상황, 이런 방식

- Next.js 등의
  라이브러리에서는 [페이지에 따라 적절한 렌더링 방식을 사용하도록 권장](https://nextjs.org/learn-pages-router/foundations/how-nextjs-works/rendering)
  하고 있다.
- 정적인 데이터만 보여주는 페이지(개발 블로그, 랜딩 페이지): SSG
- SEO가 필요하거나 초기 렌더링 속도가 중요한 페이지: SSR(Universal Rendering)
- SEO가 필요없고 유저 인터렉션이 많은 페이지(관리자 대시보드): CSR

## 성능 지표로 렌더링 방식 비교

### 용어

- **FCP**(First Contentful Paint): 로드부터 첫 컨텐츠 렌더링까지의 시간
- **TTI**(Time to Interactive): 로드부터 인터렉션이 가능해질때까지의 시간
- **TBT**(Total Blocking Time): FCP ↔ TTI (첫 컨텐츠 렌더링 시점부터 인터렉션 가능해질때까지의 시간)
- **INP**(Interaction to Next Paint): 사용자 인터렉션에 대한 전반적인 속도 측정
- **TTFB**(Time to First Byte): 링크 클릭 후 첫 컨텐츠 렌더링까지의 시간

### 비교

- **CSR**: FCP 👎, FCP <<< TTI (TBT, INP 👎), TTFB 👍
- **SSR**: FCP 👍, FCP = TTI (TBT, INP 👍), TTFB 👎
- **Universal** **Rendering**: FCP 👍, TTI >>> FCP (TBT, INP 👎), TTFB 👍

## 참고 자료

- [Rendering on the Web | web.dev](https://web.dev/articles/rendering-on-the-web?hl=ko)
- [Demystifying SSR, CSR, universal and static rendering with animations | Franck Abgrall](https://dev.to/kefranabg/demystifying-ssr-csr-universal-and-static-rendering-with-animations-m7d?fbclid=IwAR31N68HLXa8lDnC3iOa7wsuQ4cDZBlKaUOgG_Fk7DovME2VYlG3ABtcczM)
- [Universal Server Side Rendering이란? | Evan Moon](https://evan-moon.github.io/2018/09/25/universal-ssr/#%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B0%9C%EB%85%90%EC%9D%98-server-side-rendering%EC%9D%98-%EB%93%B1%EC%9E%A5)
