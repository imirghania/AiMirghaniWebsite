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
// import theme from "/codeHighlightTheme.json?url";

const LIVE_URL = "https://imirghania.github.io";

const rehypePrettyCodeOptions = {
  theme: "dracula",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className;
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push("line--highlighted");
    } else {
      node.properties.className = ["line--highlighted"];
    }
    // node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: LIVE_URL,
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
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          headingProperties: {
            className: ["scroll-mt-6 no-underline"],
          },
          properties: {
            className: ["anchor", "scroll-mt-9"],
          },
          content: {
            type: "element",
            tagName: "i",
            properties: { className: ["fas", "fa-link"] },
          },
        },
      ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
  redirects: {
    "/blog/tag/blog/article/[...slug]": "/blog/article/the-perfect-brew",
    "/blogblog": "/blog",
  },
});
