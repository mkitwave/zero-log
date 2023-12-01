import Head from "next/head";
import { BLOG_TITLE } from "../../lib/constants";
import { TfiDownload } from "react-icons/tfi";
import {
  Contact,
  Education,
  Introduction,
  Projects,
  Work,
} from "../../components/Resume";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | {BLOG_TITLE}</title>
      </Head>
      <article className="md:p-10 p-5 w-full flex justify-center">
        <div className="flex flex-col gap-y-16 md:w-[56rem] w-full h-full text-start items-center">
          <Introduction />
          <Work />
          <Projects />
          <Education />
          <Contact />
        </div>
      </article>
    </>
  );
}
