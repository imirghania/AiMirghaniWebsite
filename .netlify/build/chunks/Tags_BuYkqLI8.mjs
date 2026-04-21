import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DA_5307C.mjs';
import { c as capitalize } from './main_CDnNHdgm.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span${addAttribute(index % 2 === 0 ? "px-2 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90" : "px-2 py-1 bg-indigo-500 text-white rounded-full text-xs hover:opacity-90", "class")}><a${addAttribute(`/blog/tag/${tag}`, "href")} class="text-white">#${capitalize(tag)}</a></span>`)} </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/Tags.astro", void 0);

export { $$Tags as $ };
