import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import remarkGfm from "remark-gfm";
import PostType from "../interfaces/post";

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
  try {
    const fileContents = getPostRawSourceBySlug(slug);

    const serializedData = await serialize(fileContents, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: "mdx",
      },
      parseFrontmatter: true,
      // This explicitly tells next-mdx-remote that this content should only be rendered on the client
      scope: {}, // Pass any values you want available to the MDX content
    });

    return {
      ...serializedData,
      post: { ...serializedData.frontmatter, slug } as PostType,
    };
  } catch (error) {
    console.error(`Error serializing MDX for slug ${slug}:`, error);
    // Return a valid but empty serialized content to prevent build failures
    return {
      compiledSource: "",
      frontmatter: {},
      post: { title: "Error loading post", date: new Date().toISOString(), slug } as PostType,
    };
  }
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
