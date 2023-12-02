import { ReactNode } from "react";
import { Layout } from "../components/Layout";
import "../styles/index.css";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "../lib/constants";
import { Metadata } from "next";

const defaultMetadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zerolog.vercel.app"),
  title: {
    template: `%s | ${BLOG_TITLE}`,
    default: BLOG_TITLE,
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    ...defaultMetadata,
    type: "website",
    images: ["/assets/og-image.png"],
  },
  twitter: {
    ...defaultMetadata,
    card: "summary_large_image",
    site: "@1EEZER0",
    creator: "@1EEZER0",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
