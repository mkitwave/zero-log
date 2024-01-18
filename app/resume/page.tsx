import { TfiDownload } from "react-icons/tfi";
import {
  Education,
  Introduction,
  Projects,
  Work,
  PdfButton,
} from "../../components/Resume";

export const metadata = {
  title: `Resume`,
  description: `이예서 이력서`,
};

export default function Resume() {
  return (
    <article className="md:py-10 py-5 w-full flex justify-center">
      <div className="flex flex-col gap-y-16 md:w-[56rem] w-full h-full text-start items-center">
        <Introduction />
        <Work />
        <Projects />
        <Education />
      </div>
      <PdfButton />
    </article>
  );
}
