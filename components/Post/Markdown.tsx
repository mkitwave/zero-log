"use client";

import { MDXRemote } from "next-mdx-remote";
import { getPostSourceBySlug } from "../../lib/api";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const Markdown = ({ source }: Props) => {
  return (
    <article className="leading-loose flex flex-col gap-y-3 w-full">
      <MDXRemote
        {...source}
        components={{
          // Headings
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold pt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold pt-3">{children}</h3>
          ),
          h4: ({ children }) => <h4 className="text-xl pt-1">{children}</h4>,

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside">{children}</ol>
          ),

          // Link
          a: ({ children, href }) => (
            <a
              target="_blank"
              href={href}
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              {children}
            </a>
          ),

          // Code / Pre 에 대한 스타일링은 markdown.css 에 정의
        }}
      />
    </article>
  );
};
