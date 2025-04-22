import { Metadata } from "next";
import Link from "next/link";
import { DateFormatter } from "../../../components/Common";
import { Markdown } from "../../../components/Post";
import { Comment } from "../../../components/Post/Comment";
import { Toc } from "../../../components/Post/Toc";
import { getPostSlugs, getPostSourceBySlug } from "../../../lib/api";
import { BLOG_TITLE } from "../../../lib/constants";
import "../../../styles/markdown.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostSourceBySlug(slug);
  const title = `${post.title} | ${BLOG_TITLE}`;

  const defaultMetadata = {
    title,
    description: post.excerpt,
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
  const slugs = getPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const source = await getPostSourceBySlug(slug);
  const post = source.post;

  return (
    <article className="p-3">
      <div className="flex flex-col items-center">
        <div className="w-full lg:max-w-[60%] flex flex-col lg:pt-[3rem] gap-y-4">
          <span className="font-semibold text-lg font-mono">
            /<Link href="/posts" className="underline">FEED</Link>/<DateFormatter dateString={post.date} />
          </span>
          <h1 className="text-5xl font-medium break-keep tracking-tighter font-mono text-start">
            {post.title}
          </h1>
        </div>
        <div className="w-full lg:max-w-[60%] font-mono">
          <Toc />
          <Markdown source={source} />
          <Comment />
        </div>
      </div>
    </article>
  );
}
