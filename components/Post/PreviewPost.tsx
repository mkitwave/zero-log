import Link from "next/link";
import PostType from "../../interfaces/post";
import { DateFormatter } from "../Common";

type Props = {
  post: PostType;
};

export const PreviewPost = ({ post }: Props) => {
  const { slug, title, date } = post;

  return (
    <Link
      href={`/posts/${slug}`}
      className="flex border-b border-gray-500 items-center w-full lg:h-16 lg:py-0 py-4"
    >
      <span className="text-sm font-mono w-32">
        <DateFormatter dateString={date} />
      </span>
      <span className="lg:text-2xl w-0 grow text-lg tracking-tight">{title}</span>
    </Link>
  );
};
