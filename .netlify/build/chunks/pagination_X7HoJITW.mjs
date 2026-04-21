import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DA_5307C.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, pageType, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="join grid grid-cols-3"> <a${addAttribute("/" + pageType + "?page=" + (currentPage - 1), "href")}${addAttribute(
    [
      "join-item btn border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-violet-500 hover:border-violet-500 hover:text-white dark:hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:text-white transition-colors duration-200",
      { "pointer-events-none opacity-40": disablePrevious }
    ],
    "class:list"
  )}>«</a> <a class="join-item btn border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 pointer-events-none">Page ${currentPage}</a> <a${addAttribute("/" + pageType + "?page=" + (currentPage + 1), "href")}${addAttribute(
    [
      "join-item btn border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-600 dark:hover:border-fuchsia-600 dark:hover:text-white transition-colors duration-200",
      { "pointer-events-none opacity-40": disableNext }
    ],
    "class:list"
  )}>»</a> </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/pagination.astro", void 0);

export { $$Pagination as $ };
