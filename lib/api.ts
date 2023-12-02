import fs from "fs";
import { join } from "path";
import PostType from "../interfaces/post";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getHighlighter } from "shiki";

const postsDirectory = join(process.cwd(), "_posts");
const themePath = join(process.cwd(), "lib/shiki/theme/solarized-light.json");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.mdx$/, ""));
}

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
          rehypePrettyCode,
          {
            theme: "solarized-light",
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
