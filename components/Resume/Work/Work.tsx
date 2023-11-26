import Image from "next/image";
import CietyLogo from "../../../public/assets/resume/ciety-logo.svg";
import OmnummLogo from "../../../public/assets/resume/omnumm-logo.svg";
import { Box, Project } from "../Common";
import { Company } from "./Company";

export const Work = () => {
  return (
    <Box className="flex flex-col gap-y-14">
      <h3 className="font-bold text-4xl">Work Experience</h3>
      <Company
        name="마플코퍼레이션"
        description="2021.10 - 재직 중"
        url="https://www.marpplecorp.com/"
      >
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
          description="2022.01 - 2023.11"
          items={[
            "전반적인 커뮤니티 코어 기능 및 유저 온보딩 프로세스 구현",
            "디자인 시스템 컨벤션 제안 및 Storybook 세팅",
            "공용 모듈화 리팩토링을 통한 기술 부채 해소",
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
          description="2021.12 - 2022.01"
          items={[
            "Canvas API 기반의 대용량 랜덤 이미지 생성 및 블록체인 업로드 구현",
            "Domain Driven Design 기반 리팩토링",
            "백오피스 이메일 UI 제너레이터 개발",
          ]}
        />
      </Company>
    </Box>
  );
};

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
      { name: "Storybooks", type: "light" },
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
