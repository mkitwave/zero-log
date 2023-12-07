import { getAllPosts } from "../../lib/api";
import { PreviewPostList } from "../../components/Post";

export const metadata = {
  title: `Posts`,
};

export default async function Posts() {
  const allPosts = await getAllPosts();

  return <PreviewPostList posts={allPosts} />;
}
