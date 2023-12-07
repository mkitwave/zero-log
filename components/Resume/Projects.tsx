import { Box, Project } from "./Common";
import keyVisual from "../../public/assets/key-visual-eyes.gif";
import Image from "next/image";
import CietyLogo from "../../public/assets/resume/ciety-logo.svg";
import OmnummLogo from "../../public/assets/resume/omnumm-logo.svg";

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
    <Box className="flex flex-col gap-y-14">
      <h3 className="font-bold text-4xl">Projects</h3>
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
              title: "커뮤니티 코어 기능 기획/개발 및 유지보수",
              descriptions: [
                "DM, 검색, 유저 온보딩, 어드민 세팅, 라이브 스트리밍 등의 전반적인 커뮤니티 기능을 담당하였습니다. 대부분의 기능은 PC, 모바일 웹뷰 두 플랫폼에서 사용 가능한 SPA 페이지로 개발하였습니다.",
              ],
            },
            {
              title: "웹뷰 간 Context 공유 로직 개선",
              descriptions: [
                "기존 웹뷰 간 Context 공유 로직은 발신하고자 하는 웹뷰에서 window.postMessage() 메소드를 이용하여 { type: string, payload: any } 형태의 데이터를 전달하고, 앱에서 해당 message를 받아 적절한 웹뷰에 다시 postMessage()로 전달하는 형태였습니다. 해당 방식은 정상적으로 작동하였지만, 몇 가지 문제가 있었습니다.",
                [
                  "공유하고자 하는 Context를 추가·삭제할 때 앱 배포가 필요합니다. 배포 시마다 앱 심사를 통과해야 하기에 병목이 생깁니다.",
                  "서비스의 범위가 넓어질수록 앱에서 컨트롤해야 하는 message의 개수가 비대해지고, 웹과 앱 양측에서 관리가 힘들어집니다.",
                ],
                "같은 origin의 브라우저 간 데이터 통신을 가능케 하는 Broadcast Channel API를 도입하였습니다.",
                [
                  "useBroadcastChannel hook을 생성하여, channelName, message를 수신받을 수 있는 onMessage 콜백을 작성하면 앱을 거치지 않고 다른 웹뷰에 데이터를 전달할 수 있는 postMessage 함수를 리턴하게끔 했습니다.",
                  "channelName과 channelName에 해당하는 message 타입을 모듈 별로 미리 정의해 type-safety하게 사용할 수 있게 하였으며, 관리 포인트를 간소화하였습니다.",
                  "해당 hook은 새로 작성하는 코드부터 점진적으로 도입되어, 프로덕션 코드에 반영되었습니다.",
                ],
              ],
            },
            {
              title: "Comment 공용 모듈 리팩토링",
              descriptions: [
                "초기 다수의 인원이 참여하여 빠른 속도로 기능이 추가된 제품 특성 상, 유사한 기능을 병렬적으로 구현하여 동일한 로직을 여러 벌로 작성하거나, 코드 복제 방식으로 작성된 코드가 많았습니다. 제품 안정화 이후에도 추상화된 모듈의 부재로 몇 가지 비효율을 겪었습니다.",
                [
                  "분산된 로직으로 인해 버그 수정 시 여러 모듈을 오가며 코드의 위치를 파악해야 합니다.",
                  "유사한 기능을 구현하는 과정에서 코드를 단순 복제하며 휴먼 에러 발생 확률이 높아집니다.",
                ],
                "특히 Comment 관련 로직은 이러한 문제가 있었습니다.",
                [
                  "총 4개의 기능에 대한 코드가 유사한 로직을 가짐에도 각 모듈에서 분산되어 있습니다.",
                  "기능 별 Redux Slice 사용으로 인해 보일러플레이트 코드가 비대합니다.",
                  "Comment, Message, Chat 등의 컨벤션 없는 용어 사용으로 개발자에게 혼동을 줄 가능성이 있습니다.",
                ],
                "Comment 공용 모듈을 생성하여, 각 기능에서 공통적으로 필요한 로직을 하나의 모듈로 추상화하였습니다.",
                [
                  "공통으로 적용되는 전역 상태 Slice를 쉽게 생성할 수 있도록, Redux Toolkit의 createSlice를 래핑해 사용하는 방법을 채택했습니다. 또한 해당 전역 상태를 모듈에서 쉽게 접근할 수 있도록 유틸성 hook을 작성했습니다.",
                  "분산되어있던 로직을 기능 별 Generic type만 주입하면 type-safety하게 사용할 수 있게 하였으며, 추가 로직에 대한 확장성을 고려하였습니다.",
                  "기능 별 용어 사용을 컨벤션화해 개발자의 혼동을 방지했습니다.",
                ],
              ],
            },
            {
              title: "오픈소스 도입",
              descriptions: [
                "API 버전 관리의 부재로, 수동으로 작성하고 있었던 API 문서 타입을 swagger-typescript-api를 통해 명령어로 자동화하였습니다. 도입 이후 휴먼 에러 발생이 줄어들었고, API 문서의 오류도 빠르게 찾아낼 수 있었습니다.",
                "관리 책임이 명확하지 않았던 공용 컴포넌트 모듈을 관리하였으며, Storybook 도입을 통해 중복 컴포넌트 생성을 방지하고 테스트를 간편화하였습니다.",
                "i18next 도입으로 다국어 처리 환경을 조성하였습니다.",
                "서비스 초기, API 병목 없이 FE 비즈니스 로직을 작성할 수 있도록 msw를 도입하였습니다.",
              ],
            },
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
              title: "Generative Art Builder 개발",
              descriptions: [
                "Canvas API 기반의 대용량 랜덤 이미지 생성 및 블록체인 업로드 기능을 개발하였습니다.",
              ],
            },
            {
              title: "Domain Driven Design 기반 리팩토링",
              descriptions: [
                "RxJS 비즈니스 로직과 React 뷰 로직을 분리해, 비즈니스 로직 테스트에 용이한 방향으로 리팩토링하였습니다.",
              ],
            },
            {
              title: "백오피스 이메일 UI 제너레이터 개발",
              descriptions: [
                "여러 메일 플랫폼에 호환되는 이메일 마크업 템플릿 제너레이터를 개발하였습니다.",
              ],
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
                { type: "light", name: "Tailwind CSS" },
              ],
            },
          ]}
          items={[
            {
              title: "기술 스택 변경 및 이전 작업",
              descriptions: [
                "Jekyll 기반에서 Gatsby + React로 1차 전환을 진행하였으며, 현재 Next.js + Vercel 기반의 새로운 코드 베이스로 2차 전환을 진행 중에 있습니다. ",
              ],
            },
          ]}
        />
      </div>
    </Box>
  );
};
