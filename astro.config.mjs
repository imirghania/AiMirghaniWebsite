import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.my-site.dev",
  integrations: [tailwind(), vue(), mdx(), icon()],
  markdown: {
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
    ],
  },
  redirects: {
    "/blog/tag/blog/article/[...slug]": "/blog/article/the-perfect-brew",
  },
});
