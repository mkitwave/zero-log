import { PreviewPostList } from "../../components/Post";
import { getAllPosts } from "../../lib/api";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <PreviewPostList posts={allPosts} />
  );
}