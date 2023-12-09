import fs from "fs";
import { join } from "path";
import PostType from "../interfaces/post";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeCode from "rehype-pretty-code";
import { getShikiHighlighter } from "./shiki/getShikiHighlighter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.mdx$/, ""));
}

const getPostRawSourceBySlug = (slug: string) => {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
};

export const getPostSourceBySlug = async (slug: string) => {
  const fileContents = getPostRawSourceBySlug(slug);

  const serializedData = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          // @ts-ignore @TODO rehype-pretty-code 의존성 오류
          rehypeCode,
          {
            theme: "solarized-light",
            getHighlighter: getShikiHighlighter,
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

const getPostFrontmatterBySlug = async (slug: string) => {
  const fileContents = getPostRawSourceBySlug(slug);

  const serializedData = await serialize(fileContents, {
    parseFrontmatter: true,
  });

  return { ...serializedData.frontmatter, slug } as PostType;
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();

  const posts = Promise.all(
    slugs.map((slug) => getPostFrontmatterBySlug(slug)),
  ).then((sources) =>
    sources.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
  );

  return posts;
};
