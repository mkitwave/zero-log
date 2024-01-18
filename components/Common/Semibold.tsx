import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SB = ({ children }: Props) => {
  return <span className="font-semibold">{children}</span>;
};
