/* empty css                                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DA_5307C.mjs';
import { c as capitalize, $ as $$Main } from '../../../chunks/main_CDnNHdgm.mjs';
import { a as getCollection } from '../../../chunks/_astro_content_DDJfDPyh.mjs';
import { $ as $$PostCard } from '../../../chunks/post-card_Dsy6utNn.mjs';
import { $ as $$PageHeading } from '../../../chunks/page-heading_DNaoVok4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => {
      return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    }
  ).filter((article) => article.data.isPublished);
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("tag is required");
  }
  const tagPosts = allBlogArticles.filter((article) => article.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, { "title": `Tag - #${capitalize(tag)}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-40 max-w-2xl mx-auto my-12 px-7 lg:px-0"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "label": "$ ls posts --tag", "title": `#${capitalize(tag)}`, "description": "" })} <div> ${tagPosts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$PostCard, { "post": post })}`)} </div> </section> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/blog/tag/[...tag].astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/blog/tag/[...tag].astro";
const $$url = "/blog/tag/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
