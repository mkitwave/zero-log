import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { BLOG_TITLE } from "../../lib/constants";
import PostType from "../../interfaces/post";
import { useMemo, useState } from "react";
import { flat, map, toArray, uniq } from "@fxts/core";
import { PreviewPost } from "../../components/Post";

type Props = {
  allPosts: PostType[];
};

export default function Posts({ allPosts }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = useMemo<string[]>(
    () => toArray(uniq(flat(map(({ tags }) => tags, allPosts)))) ?? [],
    [allPosts],
  );

  const filteredPosts = useMemo<PostType[]>(
    () =>
      selectedTag
        ? allPosts.filter(({ tags }) => tags.includes(selectedTag))
        : allPosts,
    [allPosts, selectedTag],
  );

  const handleSelectTag = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  return (
    <>
      <Head>
        <title>Posts | {BLOG_TITLE}</title>
      </Head>
      <div className="flex flex-col h-full w-full py-10">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/4 lg:min-w-[20rem] lg:max-w-full lg:h-[20rem] h-[5rem] rounded text-xl">
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
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
