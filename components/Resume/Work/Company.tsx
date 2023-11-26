import { ReactNode } from "react";

type CompanyProps = {
  name: string;
  url: string;
  description: string;
  children?: ReactNode;
};

export const Company = ({ name, url, description, children }: CompanyProps) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-x-10 gap-y-10">
      <div className="flex flex-col gap-y-2">
        <h4 className="text-3xl font-bold">
          <a target="_blank" href={url}>
            {name}
          </a>
        </h4>
        <span>{description}</span>
      </div>
      <div className="flex flex-col gap-y-16">{children}</div>
    </div>
  );
};
