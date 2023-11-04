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
        <h1 className="shrink-0 md:text-[20rem] text-[12rem] md:break-words text-gray-900 flex pb-2 tracking-tight leading-tight md:pr-8">
          Zero. log
        </h1>
        <KeyVisual />
      </div>
    </>
  );
}
