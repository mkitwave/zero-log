import Link from "next/link";
import Image from "next/image";
import keyVisual from "../../public/assets/key-visual-eyes.gif";
import { PERSONAL_LINKS } from "../../lib/constants";
import { TfiArrowTopRight } from "react-icons/tfi";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex border-b justify-between border-gray-500 items-center h-20">
      <div className="md:gap-x-4 gap-x-2 flex text-lg md:text-2xl items-center font-light">
        {pathname !== "/" && (
          <Link href="/" className="mr-2">
            <Image
              src={keyVisual}
              alt="key visual"
              width={50}
              className="md:w-10 md:h-10 h-8 w-8"
            />
          </Link>
        )}
        <Link href="/posts" className="hover:decoration-1 hover:underline">
          Posts
        </Link>
        <Link href="/resume" className="hover:decoration-1 hover:underline">
          Resume
        </Link>
      </div>
      <div className="gap-x-2 md:text-md text-sm flex text-black">
        <a
          href={PERSONAL_LINKS.twitter}
          target="_blank"
          className="rounded-full border border-gray-500 h-10 flex gap-x-1.5 items-center px-3 justify-center"
        >
          Twitter
          <TfiArrowTopRight className="w-4 h-4 mt-1" />
        </a>
        <a
          href={PERSONAL_LINKS.github}
          target="_blank"
          className="rounded-full border border-gray-500 h-10 flex gap-x-1.5 items-center px-3 justify-center"
        >
          Github
          <TfiArrowTopRight className="w-4 h-4 mt-1" />
        </a>
      </div>
    </header>
  );
};
