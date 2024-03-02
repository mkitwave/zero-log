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
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "2.5rem",
          flexDirection: "column",
          alignItems: "flex-end",
          color: "black",
          backgroundColor: "#F9FAFB",
          wordBreak: "break-all",
          fontFamily: "GmarketSansMedium",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "0",
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "2.25rem",
              lineHeight: "2",
              paddingBottom: "2rem",
            }}
          >
            {title}
          </span>
          {excerpt && (
            <span style={{ opacity: "60%", fontSize: "1.125rem" }}>
              {excerpt}
            </span>
          )}
        </div>
        <span style={{ fontSize: "1.5rem" }}>Zero.log</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GmarketSansMedium",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
