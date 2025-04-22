"use client";

import { getPostSourceBySlug } from "../../lib/api";
import { ClientMDX } from "./ClientMDX";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const Markdown = ({ source }: Props) => {
  return (
    <article
      id="markdown"
      className="leading-loose flex flex-col gap-y-3 w-full pb-20"
    >
      <ClientMDX source={source} />
    </article>
  );
};
