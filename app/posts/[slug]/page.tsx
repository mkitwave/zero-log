import { getPostSlugs, getPostSourceBySlug } from "../../../lib/api";
import { CoverImage, DateFormatter } from "../../../components/Common";
import { Markdown } from "../../../components/Post";
import "../../../styles/markdown.css";
import { Comment } from "../../../components/Post/Comment";
import { Metadata } from "next";
import { BLOG_TITLE } from "../../../lib/constants";
import { Toc } from "../../../components/Post/Toc";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { post } = await getPostSourceBySlug(slug);
  const title = `${post.title} | ${BLOG_TITLE}`;

  const defaultMetadata = {
    title,
    description: post.excerpt,
    images: [
      `/api/og?title=${post.title}&excerpt=${post.excerpt}&imageUrl=${post.ogImage.url}`,
    ],
  };

  return {
    title: {
      absolute: title,
    },
    description: post.excerpt,
    openGraph: defaultMetadata,
    twitter: {
      ...defaultMetadata,
      card: "summary",
      site: "@1EEZER0",
      creator: "@1EEZER0",
    },
  };
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const source = await getPostSourceBySlug(slug);
  const post = source.post;

  return (
    <article className="p-3">
      <div className="flex flex-col items-center">
        <div className="w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16">
          <h1 className="text-6xl font-medium break-keep tracking-tighter leading-tight md:leading-none md:text-start text-center">
            {post.title}
          </h1>
          <span className="font-bold text-zinc-400 md:text-start text-center text-lg">
            <DateFormatter dateString={post.date} />
          </span>
        </div>
        <div className="w-[75rem] max-w-full overflow-hidden border border-gray-500 rounded-xl mb-16">
          <CoverImage title={post.title} src={post.coverImage} />
        </div>
        <Toc />
        <div className="w-[65rem] max-w-full md:max-w-[60%]">
          <Markdown source={source} />
          <Comment />
        </div>
      </div>
    </article>
  );
}
