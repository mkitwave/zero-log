import { ReactNode } from "react";
import { StackBox } from "./StackBox";
import { Stack } from "./Stack";

type Props = {
  name: string;
  description?: ReactNode;
  url?: string;
  stacks: {
    title: string;
    items: { name: string; type: "dark" | "light" }[];
  }[];
  icon?: ReactNode;
  items: Array<ReactNode>;
};

export const Project = ({
  name,
  description,
  url,
  stacks,
  icon,
  items,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex flex-col gap-y-2">
        {url ? (
          <a
            target="_blank"
            href={url}
            className="font-semibold text-3xl border-black w-fit border-b flex items-center"
          >
            {name}
            {icon}
          </a>
        ) : (
          <span className="font-semibold text-3xl w-fit flex items-center">
            {name}
            {icon}
          </span>
        )}
        {description && <span className="text-sm">{description}</span>}
      </div>
      <div className="flex flex-col gap-y-5">
        {stacks.map(({ title, items }) => (
          <StackBox key={title} title={title}>
            {items.map(({ name, type }) => (
              <Stack key={name} type={type}>
                {name}
              </Stack>
            ))}
          </StackBox>
        ))}
      </div>
      <ul className="list-inside list-disc leading-relaxed">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
