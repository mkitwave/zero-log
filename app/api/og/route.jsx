import { ImageResponse } from "next/og";
export const runtime = "edge";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const excerpt = searchParams.get("excerpt");
  const fontData = await fetch(
    new URL("public/assets/font/GmarketSansTTFMedium.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex p-10 flex-col items-end text-black"
        style={{
          backgroundColor: "#F9FAFB",
          wordBreak: "break-all",
        }}
      >
        <div tw="w-full h-0 grow flex flex-col justify-center">
          <span tw="text-4xl leading-loose pb-8">{title}</span>
          {excerpt && <span tw="opacity-60 text-lg">{excerpt}</span>}
        </div>
        <span tw="text-2xl">Zero.log</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
