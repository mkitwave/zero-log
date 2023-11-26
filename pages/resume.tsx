import Head from "next/head";
import { BLOG_TITLE } from "../lib/constants";
import { TfiDownload } from "react-icons/tfi";
import {
  Contact,
  Education,
  Introduction,
  Projects,
  Work,
} from "../components/Resume";

const PDF_ELEMENT_ID = "PDF";

export default function Resume() {
  const downloadPdf = async () => {
    console.log("TODO");
  };

  return (
    <>
      <Head>
        <title>Resume | {BLOG_TITLE}</title>
      </Head>
      <article
        id={PDF_ELEMENT_ID}
        className="md:p-10 p-5 w-full flex justify-center"
      >
        <div className="flex flex-col gap-y-16 md:w-[56rem] w-full h-full text-start items-center">
          <Introduction />
          <Work />
          <Projects />
          <Education />
          <Contact />
        </div>
      </article>
      <button
        type="button"
        onClick={downloadPdf}
        className="hidden fixed right-10 bottom-10 w-16 h-16 gap-y-1 text-black rounded-full flex flex-col items-center justify-center border border-gray-900"
      >
        <TfiDownload className="w-5 h-5" />
        <span className="text-xs">PDF</span>
      </button>
    </>
  );
}
