"use client";

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { getPostSourceBySlug } from "../../lib/api";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const Markdown = ({ source }: Props) => {
  return (
    <article className="leading-loose flex flex-col gap-y-3 w-full pb-20">
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
              className="inline text-blue-500 hover:text-blue-600 hover:underline"
            >
              {children}
            </a>
          ),

          // Image
          img: ({ src, alt }) => (
            <div className="w-full flex justify-center py-6">
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width={800}
                height={400}
                className="w-full md:w-[70%] rounded-lg shadow-md"
              />
            </div>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-black pl-4">
              {children}
            </blockquote>
          ),

          // Code / Pre 에 대한 스타일링은 markdown.css 에 정의
        }}
      />
    </article>
  );
};
