import fs from "fs";
import { join } from "path";
import PostType from "../interfaces/post";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeCode, { Options as RehypeCodeOptions } from "rehype-pretty-code";
import { noop } from "@fxts/core";
import * as shiki from "shiki";

const postsDirectory = join(process.cwd(), "_posts");
const shikiDirectory = join(process.cwd(), "lib/shiki");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.mdx$/, ""));
}

const touched = { current: false };

const touchShikiPath = (): void => {
  if (touched.current) return;
  fs.readdir(shikiDirectory, noop);
  touched.current = true;
};

const getHighlighter: RehypeCodeOptions["getHighlighter"] = async (options) => {
  touchShikiPath();

  const highlighter = await shiki.getHighlighter({
    ...(options as any),
    paths: {
      languages: `${shikiDirectory}/languages/`,
      themes: `${shikiDirectory}/themes/`,
    },
  });

  return highlighter;
};

export const getPostSourceBySlug = async (slug: string) => {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const serializedData = await serialize(fileContents, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          // @ts-ignore @TODO rehype-pretty-code 의존성 오류
          rehypeCode,
          {
            theme: "solarized-light",
            getHighlighter,
            keepBackground: false,
          },
        ],
      ],
      format: "mdx",
    },
    parseFrontmatter: true,
  });

  return {
    ...serializedData,
    post: { ...serializedData.frontmatter, slug } as PostType,
  };
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();

  const posts = Promise.all(
    slugs.map((slug) => getPostSourceBySlug(slug)),
  ).then((sources) =>
    sources
      .map((source) => source.post)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
  );

  return posts;
};
