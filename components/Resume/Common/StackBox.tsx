import { ReactNode } from "react";

type StackBoxProps = {
  title?: string;
  children?: ReactNode;
};

export const StackBox = ({ title, children }: StackBoxProps) => (
  <div className="flex flex-wrap gap-1 py-4 px-3 w-fit border border-gray-500 rounded-2xl relative">
    {title && (
      <span className="absolute bg-gray-50 left-6 top-0 -translate-y-1/2 text-sm px-2">
        {title}
      </span>
    )}
    {children}
  </div>
);
