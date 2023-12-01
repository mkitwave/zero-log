import { getPostSourceBySlug } from "../../../lib/api";
import { BLOG_TITLE } from "../../../lib/constants";
import Head from "next/head";
import { CoverImage, DateFormatter } from "../../../components/Common";
import { Markdown } from "../../../components/Post";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params: { slug } }: Props) {
  const source = await getPostSourceBySlug(slug);
  const post = source.post;
  const title = `${post.title} | ${BLOG_TITLE}`;

  return (
    <article className="md:p-10 p-3">
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
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
          <CoverImage title={title} src={post.coverImage} />
        </div>
        <div className="w-[65rem] max-w-full">
          <Markdown source={source} />
        </div>
      </div>
    </article>
  );
}
