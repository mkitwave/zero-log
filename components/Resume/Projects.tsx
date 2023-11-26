import { Box, Project } from "./Common";
import keyVisual from "../../public/assets/key-visual-eyes.gif";
import Image from "next/image";

export const Projects = () => {
  return (
    <Box className="flex flex-col gap-y-14">
      <h3 className="font-bold text-4xl">Other Projects</h3>
      <div className="flex flex-col gap-y-10">
        <Project
          name="Zero.log"
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
            "반응형 디자인 적용",
            "Jekyll → Gatsby → Next.js 로 단계적 마이그레이션",
          ]}
        />
        <Project
          name="Untitled."
          description={
            <div>
              Github (
              <a
                className="underline"
                target="_blank"
                href="https://github.com/mkitwave/untitled-project"
              >
                React
              </a>
              {" | "}
              <a
                className="underline"
                target="_blank"
                href="https://github.com/mkitwave/untitled-project/tree/web-component"
              >
                Web Component
              </a>
              )
            </div>
          }
          stacks={[
            {
              title: "React ver.",
              items: [
                { type: "dark", name: "React" },
                { type: "dark", name: "Typescript" },
                { type: "dark", name: "Express" },
                { type: "light", name: "Storybook" },
                { type: "light", name: "Styled Component" },
              ],
            },
            {
              title: "Web Component ver.",
              items: [
                { type: "dark", name: "Web Component" },
                { type: "dark", name: "Typescript" },
                { type: "dark", name: "Express" },
              ],
            },
          ]}
          items={[
            "Express를 활용해 dummy 쇼핑몰 풀스택 개발",
            "Web Component → React 로 마이그레이션",
          ]}
        />
      </div>
    </Box>
  );
};
