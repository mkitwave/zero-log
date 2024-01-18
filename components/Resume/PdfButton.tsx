"use client";

import { TfiDownload } from "react-icons/tfi";

export const PdfButton = () => {
  return (
    <a
      href="resume.pdf"
      download="Resume-Yeseo Lee"
      className="fixed right-10 bottom-10 w-16 h-16 gap-y-1 text-black rounded-full flex flex-col items-center justify-center border border-gray-900"
    >
      <TfiDownload className="w-5 h-5" />
      <span className="text-xs">PDF</span>
    </a>
  );
};
