import { DateFormatter } from "../Common";
import Link from "next/link";
import PostType from "../../interfaces/post";
import Image from "next/image";

type Props = {
  post: PostType;
};

export const PreviewPost = ({ post }: Props) => {
  const { slug, title, excerpt, coverImage, tags, date } = post;

  return (
    <Link
      href={`/posts/${slug}`}
      className="lg:h-[40rem] h-[36rem] break-keep border items-center justify-between py-10 px-5 text-center border-gray-500 text-xl flex flex-col gap-y-5"
    >
      <hr className="w-10 border-gray-500" />
      <div className="flex flex-col gap-y-2 items-center h-0 grow">
        <span className="lg:text-3xl text-xl w-[80%]">{title}</span>
        <p className="flex flex-wrap gap-x-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-500 rounded-full h-fit flex items-center shrink-0 px-2 text-sm"
            >
              #{tag.toUpperCase()}
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-800">{excerpt}</p>
        <div className="flex h-0 grow items-center">
          <div className="w-full h-56 rounded-xl overflow-hidden border-gray-500 border">
            <Image
              src={coverImage}
              width={5000}
              height={1000}
              alt="cover"
              className="h-full w-max"
            />
          </div>
        </div>
      </div>
      <span className="text-sm">
        <DateFormatter dateString={date} />
      </span>
    </Link>
  );
};
