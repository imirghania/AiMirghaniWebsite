import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DA_5307C.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$PageHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeading;
  const { title, description, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative z-20 w-full mx-auto lg:mx-0"> ${label && renderTemplate`<p class="font-mono text-xs text-violet-500 dark:text-fuchsia-400 uppercase tracking-widest mb-3"> ${label} </p>`} <h2 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl"> ${title} </h2> <p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg"> ${description} </p> </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/page-heading.astro", void 0);

export { $$PageHeading as $ };
