import { ReactNode } from "react";
import { Box } from "./Common";

const SKILLS: Array<{ title: string; items: Array<ReactNode> }> = [
  {
    title: "Mindset",
    items: [
      "주도적이고 책임감 있게 일할 수 있는 환경을 좋아합니다.",
      "신뢰받는 동료가 되기 위해 생산성 및 기술적 역량을 성장시킵니다.",
      "본인 또는 팀의 문제에 대해 객관적으로 관찰, 판단하기 위해 노력하며, 더 나은 방향을 고민합니다.",
    ],
  },
  {
    title: "Communication",
    items: [
      "Figma, Adobe XD, Zeplin 등의 다양한 UI 툴 및 Slack, Notion 등의 커뮤니케이션 툴에 익숙합니다.",
      "변경사항에 대해 코드 리뷰를 진행하는 것을 지향합니다.",
      "적극적으로 생각을 표현하며, 대화했거나 대화할 내용에 대해 문서화하는 것이 습관화되어 있습니다.",
    ],
  },
  {
    title: "Web",
    items: [
      "크로스 브라우징 이슈를 대응해본 경험이 있습니다.",
      "반응형, 적응형 디자인을 적용해본 경험이 있습니다.",
      "CSR, SSR, SSG 방식의 차이점을 이해하고 상황에 맞게 적용합니다.",
      "PC, 웹뷰 두 플랫폼에서 사용 가능한 페이지를 개발해본 경험이 있습니다.",
    ],
  },
  {
    title: "JavaScript",
    items: [
      "TypeScript 환경을 선호합니다.",
      "ES6 이상의 문법을 적극적으로 사용합니다.",
      "JavaScript 비동기 처리의 특성에 대한 이해를 기반으로 에러를 핸들링합니다.",
    ],
  },
  {
    title: "React",
    items: [
      "CRA, customize-cra, Remix, Next.js 등 다양한 방식의 React 프로젝트를 경험해보았습니다.",
      "Suspence, React Hook Form 등 React 생태계의 다양한 기술을 학습하고 상황에 맞게 적용합니다.",
      "Context API, Redux, Recoil 등 여러 방식의 전역 상태 관리를 경험해보았습니다.",
    ],
  },
  {
    title: "Etc",
    items: [
      "미세한 UI/UX적 결함을 잘 찾아냅니다.",
      <>
        함수형 프로그래밍 기법에 익숙합니다. (
        <a
          target="_blank"
          className="underline"
          href="https://github.com/marpple/FxTS/pulls?q=involves%3Amkitwave"
        >
          FxTS 기여
        </a>
        )
      </>,
    ],
  },
];

export const Skills = () => {
  return (
    <Box className="flex flex-col gap-y-14">
      <h3 className="font-bold text-4xl">Skills</h3>
      <ul className="list-none flex flex-col gap-y-12">
        {SKILLS.map(({ title, items }) => (
          <li key={title} className="flex flex-col gap-y-4">
            <h4 className="font-semibold text-3xl">{title}</h4>
            <ul className="list-inside list-disc leading-relaxed flex flex-col gap-y-1">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  );
};
