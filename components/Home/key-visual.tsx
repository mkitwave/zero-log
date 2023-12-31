import Image from "next/image";
import keyVisual from "../../public/assets/key-visual-eyes.gif";

const KeyVisual = () => {
  return (
    <section className="flex items-center h-fit w-full">
      <div className="flex lg:flex-row flex-col items-center gap-x-20 w-full py-5">
        <Image src={keyVisual} alt="key visual" width={450} />
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

export default KeyVisual;
