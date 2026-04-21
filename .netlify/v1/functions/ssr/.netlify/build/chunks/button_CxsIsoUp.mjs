import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DA_5307C.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="inline-flex w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"> ${text} </a>`;
}, "/home/ubuntu_wsl/main-blog/src/components/button.astro", void 0);

export { $$Button as $ };
