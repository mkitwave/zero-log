"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPostSourceBySlug } from "../../lib/api";

const NoSSRMDXRemote = dynamic(
  async () => {
    const { MDXRemote } = await import('next-mdx-remote');

    return function WrappedMDXRemote(props: any) {
      return <MDXRemote {...props} />;
    };
  },
  {
    ssr: false,
  }
);

const components = {
  // Headings
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2
      id={children?.toString()}
      className="text-3xl font-semibold pt-10"
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3
      id={children?.toString()}
      className="text-xl font-semibold pt-6"
    >
      {children}
    </h3>
  ),
  h4: ({ children }: { children?: React.ReactNode }) => (
    <h4 id={children?.toString()} className="text-lg pt-2">
      {children}
    </h4>
  ),

  // Lists
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc list-inside flex flex-col gap-y-3">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal list-inside">{children}</ol>
  ),

  // Link
  a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
    <a
      target="_blank"
      href={href}
      className="inline text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </a>
  ),

  // Image
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="w-full flex justify-center py-6">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={400}
        className="w-full md:w-[70%] rounded-lg shadow-md"
      />
    </span>
  ),

  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-black pl-4">
      {children}
    </blockquote>
  ),
};

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const ClientMDX = ({ source }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const { post, ...mdxSerializedContent } = source;

  // Ensure this component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="animate-pulse">Loading content...</div>;
  }

  return (
    <NoSSRMDXRemote
      {...mdxSerializedContent as MDXRemoteSerializeResult}
      components={components}
    />
  );
};

