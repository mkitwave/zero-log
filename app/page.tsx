import { KeyVisual } from "../components/Home";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full lg:overflow-hidden w-full">
        <h1 className="shrink-0 lg:text-start text-center lg:pt-0 pt-10 lg:text-[16rem] text-[6rem] w-full text-gray-900 pb-2 tracking-tight leading-tight md:pr-8">
          Zero.log
        </h1>
        <KeyVisual />
      </div>
    </>
  );
}
