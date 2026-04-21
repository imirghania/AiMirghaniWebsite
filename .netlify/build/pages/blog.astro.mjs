/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DA_5307C.mjs';
import { $ as $$PageHeading } from '../chunks/page-heading_DNaoVok4.mjs';
import { $ as $$Pagination } from '../chunks/pagination_4hrmCsQL.mjs';
import { A as ARTICLES_PER_PAGE, $ as $$Main } from '../chunks/main_CS8CpU1k.mjs';
import { a as getCollection } from '../chunks/_astro_content_kHAT7z-Z.mjs';
import { $ as $$PostCard } from '../chunks/post-card_DZg20NRK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).filter((article) => article.data.isPublished);
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "AiMirghani - Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-40 max-w-2xl mx-auto my-12 px-7 lg:px-0"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "label": "$ ls posts", "title": "My Writings", "description": "Dive into my musings on life and tech in my latest posts; a blend of introspection and innovation. Keep an eye out for fresh insights and updates!" })} <div class="z-50 flex flex-col items-stretch w-full gap-5 my-8"> ${articlesForPage.map((post) => {
    return renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`;
  })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Pagination", $$Pagination, { "pageType": "blog", "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </div> </section> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/blog/index.astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
