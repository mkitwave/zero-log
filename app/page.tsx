import Link from "next/link";

const resumeUrl = "https://www.rallit.com/hub/resumes/288151/%EC%9D%B4%EC%98%88%EC%84%9C"

export default async function Home() {

  return (
    <div className="flex flex-col lg:flex-row h-full w-full lg:p-10">
      <div className="flex w-full lg:w-1/2 lg:h-full flex-col lg:gap-y-24">
        <span className="flex text-gray-900 lg:text-[10rem] text-[6rem] leading-[1.2] tracking-tighter lg:-translate-x-8">
          (+82)
        </span>
        <h1 className="flex text-gray-900 lg:text-[10rem] text-[6rem] leading-[1.2] tracking-tighter">
          Zero.log
        </h1>
        <section className="w-full pb-5 pt-10 text-gray-900 font-mono lg:text-[2rem] leading-[1.2] tracking-tighter">
          Make <span className="underline">Creative</span>, <span className="underline">Interactive</span>, <span className="underline">Comfortable</span> Things.
          Currently working as a UX Engineer @<Link href="https://toss.im" target="_blank" className="underline">Toss</Link>.
        </section>
      </div>
      <div className="flex w-full lg:w-1/2 h-full flex-col gap-y-24">

        <section className="w-full flex flex-col font-mono text-gray-900 lg:text-[2.5rem] leading-[1.2] tracking-tighter">
          <Link href="/posts" className="underline">Feed</Link>
          <Link href={resumeUrl} className="underline" target="_blank">Resume</Link>
        </section>

      </div>
    </div>
  );
}