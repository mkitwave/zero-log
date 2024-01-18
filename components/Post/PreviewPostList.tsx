"use client";

import { useMemo, useState } from "react";
import { flat, map, toArray, uniq } from "@fxts/core";
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
    <div className="flex flex-col h-full w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 w-full pb-10">
        <div className="lg:h-[20rem] rounded text-xl">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="font-light gap-x-3 flex"
              onClick={() => handleSelectTag(tag)}
            >
              <span className="whitespace-pre">
                {`(${selectedTag === tag ? "  O  " : "       "})`}
              </span>
              <span>{tag}</span>
            </button>
          ))}
        </div>
        {filteredPosts.map((post) => (
          <PreviewPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};
