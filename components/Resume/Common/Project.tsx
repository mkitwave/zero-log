import { ReactNode } from "react";
import { StackBox } from "./StackBox";
import { Stack } from "./Stack";

type Props = {
  name: string;
  date?: string;
  description?: string;
  url?: string;
  stacks: {
    title: string;
    items: { name: string; type: "dark" | "light" }[];
  }[];
  icon?: ReactNode;
  items: Array<{ title: string; descriptions: Array<string | Array<string>> }>;
};

export const Project = ({
  name,
  date,
  description,
  url,
  stacks,
  icon,
  items,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex flex-col gap-y-2">
        <h4>
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
        </h4>
        {date && <span className="text-sm">{date}</span>}
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
      <ul className="flex flex-col gap-y-6">
        {items.map(({ title, descriptions }, index) => (
          <li key={index} className="flex flex-col gap-y-2">
            <h5 className="font-semibold text-lg">{title}</h5>
            <ul className="list-inside list-disc leading-relaxed gap-y-2 flex flex-col">
              {descriptions.map((description) =>
                typeof description === "string" ? (
                  <li>{description}</li>
                ) : (
                  <ul className="pl-6 list-inside list-square flex flex-col gap-y-1">
                    {description.map((detailedDescription) => (
                      <li>{detailedDescription}</li>
                    ))}
                  </ul>
                ),
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
