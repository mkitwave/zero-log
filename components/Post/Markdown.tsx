"use client";

import { MDXRemote } from "next-mdx-remote";
import { getPostSourceBySlug } from "../../lib/api";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const Markdown = ({ source }: Props) => {
  return <MDXRemote {...source} />;
};
