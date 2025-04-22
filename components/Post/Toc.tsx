"use client";

import { useEffect, useState } from "react";

export const Toc = () => {
  const [headingElements, setHeadingElements] = useState<Array<Element>>([]);

  useEffect(() => {
    setHeadingElements(
      Array.from(document?.getElementById("markdown")?.children ?? []).filter(
        (element) => ["h2", "h3", "h4"].includes(element.tagName.toLowerCase()),
      ),
    );
  }, []);

  return (
    <div className="flex flex-col items-start gap-y-1.5 pt-10">
      {headingElements.map((element, index) => (
        <a
          key={index}
          href={`#${element.textContent}`}
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({
              behavior: "smooth",
              top: element.getBoundingClientRect().top + window.scrollY - 100,
            });
          }}
          className={`text-sm text-gray-800 ${element.tagName.toLowerCase() === "h2"
            ? ""
            : element.tagName.toLowerCase() === "h3"
              ? "pl-3"
              : "pl-6"
            }`}
        >
          {element.textContent}
        </a>
      ))}
    </div>
  );
};
