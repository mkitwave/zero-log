import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { BLOG_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import CoverImage from "../../components/Common/cover-image";
import markdownStyles from "../../components/Post/markdown-styles.module.css";
import { DateFormatter } from "../../components/Common";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | ${BLOG_TITLE}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
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
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
