import { noop } from "@fxts/core";
import fs from "fs";
import { join } from "path";
import { Options as RehypeCodeOptions } from "rehype-pretty-code";
import * as shiki from "shiki";

const shikiDirectory = join(process.cwd(), "lib/shiki");

const touched = { current: false };

const touchShikiPath = (): void => {
  if (touched.current) return;
  fs.readdir(shikiDirectory, noop);
  touched.current = true;
};

export const getShikiHighlighter: RehypeCodeOptions["getHighlighter"] = async (
  options,
) => {
  touchShikiPath();

  const highlighter = await shiki.getHighlighter({
    ...(options as any),
    paths: {
      languages: `${shikiDirectory}/languages/`,
      themes: `${shikiDirectory}/themes/`,
    },
  });

  return highlighter;
};
