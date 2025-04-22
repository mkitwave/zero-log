"use client";

import { flat, map, toArray, uniq } from "@fxts/core";
import Link from "next/link";
import { useMemo, useState } from "react";
import PostType from "../../interfaces/post";
import { PreviewPost } from "./PreviewPost";


type Props = { posts: PostType[] };

export const PreviewPostList = ({ posts }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = useMemo<string[]>(
    () => toArray(uniq(flat(map(({ tags }) => tags, posts)))) ?? [],
    [posts],
  );

  const filteredPosts = useMemo<PostType[]>(
    () =>
      selectedTag
        ? posts.filter(({ tags }) => tags.includes(selectedTag))
        : posts,
    [posts, selectedTag],
  );

  const handleSelectTag = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  return (
    <div className="flex flex-col h-full w-full gap-y-8">
      <div className="flex items-end justify-between">
        <h2 className="flex text-gray-900 lg:text-[6rem] text-[4rem] leading-[1.2] tracking-tighter">
          Feed
        </h2>
        <Link href="/" className="underline font-mono text-gray-800">
          / HOME
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-x-12 gap-y-10">
        <div className="flex flex-col lg:w-1/5 w-full">
          <div className="w-full flex h-8 border-b border-gray-500 justify-between items-start shrink-0">
            <span className="text-sm font-mono">
              / FILTER
            </span>
            <button
              type="button"
              className="text-sm font-mono text-gray-800"
              onClick={() => setSelectedTag(null)}
            >
              CLEAR FILTER
            </button>
          </div>
          <div className="flex flex-col pt-3">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="relative gap-x-2 flex font-mono text-gray-800"
                onClick={() => handleSelectTag(tag)}
              >
                {selectedTag === tag && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-[1rem] w-3.5 h-3.5 border-[1.5px] border-gray-800 rounded-full" />
                )}
                <span className="whitespace-pre">
                  {`(   )`}
                </span>
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:w-0 flex-grow pb-20">
          <div className="w-full flex h-8">
            <span className="text-sm font-mono w-32">
              / DATE
            </span>
            <span className="text-sm font-mono w-32">
              / TITLE
            </span>
          </div>
          <div className="flex flex-col w-full border-t border-gray-500">
            {filteredPosts.map((post) => (
              <PreviewPost key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
