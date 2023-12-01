import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { BLOG_TITLE } from "../../lib/constants";
import { PreviewPostList } from "../../components/Post";

export default async function Posts() {
  const allPosts = await getAllPosts();

  return (
    <>
      <Head>
        <title>Posts | {BLOG_TITLE}</title>
      </Head>
      <PreviewPostList posts={allPosts} />
    </>
  );
}
