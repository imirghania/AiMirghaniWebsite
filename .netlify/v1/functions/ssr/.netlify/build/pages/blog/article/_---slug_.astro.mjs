/* empty css                                       */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../../chunks/astro/server_DA_5307C.mjs';
import { g as getEntry } from '../../../chunks/_astro_content_DDJfDPyh.mjs';
import { b as buildToc, $ as $$Main, f as formatDate } from '../../../chunks/main_CDnNHdgm.mjs';
import { $ as $$Tags } from '../../../chunks/Tags_BuYkqLI8.mjs';
/* empty css                                        */
import { $ as $$Separator } from '../../../chunks/separator_CZzneCoQ.mjs';
import calculateReadingTime from 'reading-time';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
export { renderers } from '../../../renderers.mjs';

const $$Astro$2 = createAstro("https://ahmed.imirghani.com/");
const $$TableOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li>
- <a${addAttribute("#" + heading.slug, "href")} class="no-underline text-neutral-600 dark:text-white hover:text-fuchsia-700"> ${heading.text} </a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="list-none"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li> `;
}, "/home/ubuntu_wsl/main-blog/src/components/post/TableOfContentsHeading.astro", void 0);

const $$Astro$1 = createAstro("https://ahmed.imirghani.com/");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  return renderTemplate`${maybeRenderHead()}<div class="collapse collapse-arrow join-item border-base-300 border"> <input type="checkbox" name="my-accordion-4"> <div class="collapse-title text-xl font-bold text-black dark:text-white">
Table of Contents
</div> <div class="collapse-content"> <nav> <ul class="list-none list-outside"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TableOfContentsHeading, { "heading": heading })}`)} </ul> </nav> </div> </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/post/TableOfContents.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="comments-container" class="px-2 md:px-0"> <script src="https://giscus.app/client.js" data-repo="imirghania/AiMirghani_comments" data-repo-id="R_kgDOMaFT6A" data-category="Blog Posts Comments" data-category-id="DIC_kwDOMaFT6M4ChHbm" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="transparent_dark" data-lang="en" data-loading="lazy" crossorigin="anonymous" async>\n    <\/script> </div>'])), maybeRenderHead());
}, "/home/ubuntu_wsl/main-blog/src/components/post/comments.astro", void 0);

const getReadingTime = (text) => {
  if (!text || !text.length) return void 0;
  try {
    const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
    if (minutes && minutes > 0) {
      return `${Math.ceil(minutes)} min read`;
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
};

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry == void 0) {
    return Astro2.redirect("/404");
  }
  const { Content, headings } = await entry.render();
  const toc = buildToc(headings ?? []);
  const hasToC = toc.length > 1;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, { "title": `Blog Post - ${entry.data.title}`, "description": entry.data.description, "image": entry.data.image, "entry": entry }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative z-40 max-w-4xl pt-4 pb-1 mx-auto bg-white dark:bg-neutral-950 md:rounded-t-md text-gray-950 snap-y w-full"> <div class="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800"> <div class="absolute top-0 left-0 hidden w-px h-full mt-1 -translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div> <div class="absolute top-0 right-0 hidden w-px h-full mt-1 translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div> <h1 class="w-full max-w-2xl mx-auto text-3xl font-bold leading-tight tracking-tighter text-center md:mb-12 md:text-4xl dark:text-neutral-100 lg:text-5xl md:leading-none"> ${entry.data.title} </h1> </div> <article class="w-full max-w-2xl mx-auto mb-20 prose-sm prose px-7 lg:px-0 lg:prose-lg dark:prose-invert text-justify"> <h4 class="mt-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300 text-center">
Written by <a href="/about" class="font-semibold text-slate-800 dark:text-slate-100">${`${entry.data.author}`}</a> on 📅 ${renderTemplate`<span class="underline decoration-dashed">${formatDate(
    entry.data.pubDate
  )}</span>`} </h4> <h4 class="my-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300 text-center"> ${`\u{1F4D6} ~ ${getReadingTime(entry.body)}`} </h4> <div class="flex justify-center mb-2.5"> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} </div> ${entry.data.image ? renderTemplate`<img${addAttribute(entry.data.image, "src")}${addAttribute(`Image of Post - ${entry.data.title}`, "alt")} class="responsive-main-image">` : ""} ${entry.data.imageSrc ? renderTemplate`<div class="flex place-content-center mb-5"> <a${addAttribute(entry.data.imageSrc, "href")} target="_blank" class="text-center text-slate-900 dark:text-slate-100 no-underline hover:text-fuchsia-800 dark:hover:text-fuchsia-800 hover:scale-105">[image source]</a> </div>` : ""} ${hasToC ? renderTemplate`${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })}` : ""} <div class=" text-neutral-700 dark:text-neutral-100"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Comments" })} ${renderComponent($$result2, "GiscusComments", $$Comments, {})} </main> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/blog/article/[...slug].astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/blog/article/[...slug].astro";
const $$url = "/blog/article/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
