import { Box, Project } from "./Common";
import keyVisual from "../../public/assets/key-visual-eyes.gif";
import Image from "next/image";
import CietyLogo from "../../public/assets/resume/ciety-logo.svg";
import OmnummLogo from "../../public/assets/resume/omnumm-logo.svg";
import { SB } from "../Common";

type Stacks = {
  title: string;
  items: { name: string; type: "dark" | "light" }[];
}[];

const CIETY_STACKS: Stacks = [
  {
    title: "Web",
    items: [
      { name: "React", type: "dark" },
      { name: "TypeScript", type: "dark" },
      { name: "Redux", type: "light" },
      { name: "Tailwind CSS", type: "light" },
      { name: "Storybook", type: "light" },
    ],
  },
  {
    title: "App",
    items: [
      { name: "React Native", type: "dark" },
      { name: "TypeScript", type: "dark" },
      { name: "Recoil", type: "light" },
      { name: "Styled Component", type: "light" },
    ],
  },
];

const OMMNUM_STACKS: Stacks = [
  {
    title: "Web",
    items: [
      { name: "React", type: "dark" },
      { name: "Remix", type: "dark" },
      { name: "TypeScript", type: "dark" },
      { name: "Tailwind CSS", type: "light" },
      { name: "RxJS", type: "light" },
    ],
  },
];

export const Projects = () => {
  return (
    <Box className="flex flex-col gap-y-10">
      <h3 className="font-semibold text-4xl">✦ Projects</h3>
      <div className="flex flex-col gap-y-10">
        <Project
          name="CIETY"
          icon={
            <Image
              className="w-8 h-8"
              src={CietyLogo}
              width={100}
              alt="CIETY logo"
            />
          }
          url="https://www.ciety.xyz/"
          stacks={CIETY_STACKS}
          date="2022.01 - 2023.11 | 마플코퍼레이션"
          description="WEB3 기반의 토큰 게이팅, 라이브 스트리밍, DM 등의 기능을 제공하는 크리에이터 팬 커뮤니티 툴"
          items={[
            {
              title: (
                <>
                  PC, 모바일 웹뷰 두 플랫폼에서 사용 가능한{" "}
                  <SB>DM, 검색, 유저 온보딩, 어드민 세팅, 라이브 스트리밍</SB>{" "}
                  등의 전반적인 커뮤니티 기능 개발
                </>
              ),
            },
            {
              title: (
                <>
                  <SB>다중 웹뷰 간 데이터 공유 로직 개선</SB> 작업으로 개발
                  프로세스 고도화에 기여
                </>
              ),
            },
            {
              title: (
                <>
                  <SB>대규모 공용 모듈 리팩토링</SB>으로 기술 부채 해소
                </>
              ),
            },
            { title: <>msw, Storybook 등의 오픈소스 도입</> },
          ]}
        />
        <Project
          name="OMNUUM"
          icon={
            <Image
              className="ml-1 w-6 h-6"
              src={OmnummLogo}
              width={100}
              alt="OMNUUM logo"
            />
          }
          url="https://omnuum.io/"
          stacks={OMMNUM_STACKS}
          date="2021.12 - 2022.01 | 마플코퍼레이션(수습 기간)"
          description="PFP NFT 프로젝트 발행 및 민팅 웹사이트 빌딩 등의 기능을 제공하는 NFT 종합 솔루션 툴"
          items={[
            {
              title: (
                <>
                  Canvas API 기반의 <SB>대용량 랜덤 이미지 생성</SB> 및{" "}
                  <SB>블록체인 업로드</SB>
                  기능 개발
                </>
              ),
            },
            {
              title: <SB>Domain Driven Design 기반 리팩토링</SB>,
            },
            {
              title: "백오피스 이메일 UI 제너레이터 개발",
            },
          ]}
        />
        <Project
          name="Zero.log"
          description="기술 학습 및 아카이빙 용도의 개인 블로그"
          icon={
            <Image
              src={keyVisual}
              alt="key visual"
              width={100}
              className="w-8 h-8 ml-1"
            />
          }
          stacks={[
            {
              title: "Web",
              items: [
                { type: "dark", name: "React" },
                { type: "dark", name: "Next.js" },
                { type: "dark", name: "Typescript" },
                { type: "light", name: "Three.js" },
                { type: "light", name: "Tailwind CSS" },
              ],
            },
          ]}
          items={[
            {
              title: "기술 스택 변경 및 도메인 이전 작업",
            },

            {
              title: (
                <>
                  Three.js 기반의 <SB>3D 인터렉티브 키 비주얼</SB> 제작
                </>
              ),
            },
          ]}
        />
      </div>
    </Box>
  );
};
