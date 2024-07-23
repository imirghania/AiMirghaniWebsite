import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import icon from "astro-icon";
import rehypePrettyCode from "rehype-pretty-code";
import netlify from "@astrojs/netlify";
import {
  rehypePrettyCodeOptions,
  rehypeAutolinkHeadingsOptions,
} from "./configOptions";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://ahmed.imirghani.com/";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: BASE_URL,
  integrations: [
    tailwind(),
    vue(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    icon(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
  redirects: {
    "/blog/tag/blog/article/[...slug]": "/blog/article/[...slug]",
    "/blogblog": "/blog",
    "/feed": "/rss.xml",
  },
  adapter: netlify(),
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
});
