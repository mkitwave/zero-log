import { Eyes } from "./Eyes";

export const KeyVisual = () => {
  return (
    <section className="flex items-center h-0 grow w-full">
      <div className="flex lg:flex-row flex-col items-center gap-x-20 w-full h-full py-5">
        <Eyes />
        <p className="lg:text-7xl text-6xl shrink-0 text-gray-900">
          <span className="font-light">{"I'm"}</span>
          <br />
          <span className="font-medium">Frontend Developer</span>
          <br />
          <span className="font-light">currently work at Seoul.</span>
        </p>
      </div>
    </section>
  );
};
