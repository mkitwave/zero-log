import Head from "next/head";
import { KeyVisual } from "../components/Home";
import { BLOG_TITLE } from "../lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{BLOG_TITLE}</title>
      </Head>
      <div className="flex flex-col h-full w-full">
        <h1 className="shrink-0 lg:text-start text-center lg:pt-0 pt-10 lg:text-[20rem] text-[7rem] w-full text-gray-900 pb-2 tracking-tight leading-tight md:pr-8">
          Zero.log
        </h1>
        <KeyVisual />
      </div>
    </>
  );
}
