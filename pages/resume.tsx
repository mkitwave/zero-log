import { ReactNode } from "react";
import Head from "next/head";
import { BLOG_TITLE } from "../lib/constants";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | {BLOG_TITLE}</title>
      </Head>
      <article className="p-10 w-full h-full">
        <div className="flex flex-col w-full h-full items-center">
          <div className="flex md:h-1/2 md:flex-row flex-col w-full items-end">
            <Box className="text-4xl text-start">
              <p>
                안녕하세요,
                <br />
                프론트엔드 엔지니어 <b>이예서</b>입니다.
              </p>
            </Box>
            <hr className="border-gray-500 border h-[2.5rem] md:flex hidden" />
            <Box className="text-xl leading-loose">
              일상 속에 스며드는 프로덕트를 만드려면,
              <br /> 유저의 상황에 몰입하여 최선의 방향을 고민하고 개선해야
              한다고 믿습니다. <br />
              유연하게 변화에 적응하며, 새로운 도전을 즐깁니다.
            </Box>
          </div>
          <hr className="border-gray-500 border w-[5rem] md:flex hidden" />
          <div className="flex md:h-1/2 md:flex-row flex-col md:h-full w-full">
            <Box className="gap-y-4 flex flex-col">
              <div className="gap-x-4 flex">
                <div className="rounded-full bg-black text-white px-4 h-10 flex items-center justify-center">
                  React
                </div>
                <div className="rounded-full bg-black text-white px-4 h-10 flex items-center justify-center">
                  TypeScript
                </div>
                <div className="rounded-full shrink-0 bg-black text-white px-4 h-10 flex items-center justify-center">
                  Tailwind CSS
                </div>
              </div>
              <div className="gap-x-4 flex">
                <div className="rounded-full border-gray-500 border px-4 h-10 flex items-center justify-center">
                  Remix
                </div>
                <div className="rounded-full shrink-0 border-gray-500 border px-4 h-10 flex items-center justify-center">
                  React Native
                </div>
                <div className="rounded-full border-gray-500 border px-4 h-10 flex items-center justify-center">
                  RxJS
                </div>
              </div>
            </Box>
            <hr className="border-gray-500 border h-[2.5rem] md:flex hidden" />
            <Box className="md:flex hidden text-lg">
              + 더 많은 정보를 추가할 예정입니다.
            </Box>
          </div>
        </div>
      </article>
    </>
  );
}

type BoxProps = {
  children: ReactNode;
  className?: string;
};

const Box = ({ children, className }: BoxProps) => (
  <div
    className={`md:w-1/2 w-full break-keep h-full flex md:items-center justify-center p-5 ${className}`}
  >
    {children}
  </div>
);
