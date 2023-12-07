import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export const Box = ({ children, className }: BoxProps) => (
  <section className={`w-full break-keep h-fit flex px-5 py-2 ${className}`}>
    {children}
  </section>
);
