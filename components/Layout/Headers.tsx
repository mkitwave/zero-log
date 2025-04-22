import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex font-mono gap-x-20 h-12 items-end justify-end text-gray-900 ">
      <Link href="/">Main</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/feed">Feed</Link>
    </header>
  );
};
