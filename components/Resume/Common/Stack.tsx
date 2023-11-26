import { ReactNode } from "react";

type StackProps = {
  type: "light" | "dark";
  children?: ReactNode;
};

export const Stack = ({ type, children }: StackProps) => (
  <div
    className={`rounded-full md:px-4 md:h-8 h-6 px-2 text-xs flex w-fit items-center justify-center ${
      type === "light" ? "border-gray-500 border" : "bg-black text-white"
    }`}
  >
    {children}
  </div>
);
