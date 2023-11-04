import Image from "next/image";
import keyVisual from "../../public/assets/key-visual-eyes.gif";

const KeyVisual = () => {
  return (
    <section className="flex lg:h-0 grow items-center w-full">
      <div className="flex lg:flex-row flex-col items-center gap-x-20 w-full py-10">
        <Image src={keyVisual} alt="key visual" width={450} />
        <p className="lg:text-7xl text-6xl text-gray-900">
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

export default KeyVisual;
