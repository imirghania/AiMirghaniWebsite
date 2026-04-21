import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DA_5307C.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, pageType, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="join grid grid-cols-3"> <a${addAttribute("/" + pageType + "?page=" + (currentPage - 1), "href")}${addAttribute(
    [
      "join-item btn border-dashed border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-white dark:hover:bg-black hover:text-neutral-900 dark:hover:text-white hover:border-neutral-700 dark:hover:border-neutral-300 transition-colors duration-300",
      { "pointer-events-none opacity-40": disablePrevious }
    ],
    "class:list"
  )}>«</a> <a class="join-item btn border-dashed border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 pointer-events-none">Page ${currentPage}</a> <a${addAttribute("/" + pageType + "?page=" + (currentPage + 1), "href")}${addAttribute(
    [
      "join-item btn border-dashed border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-white dark:hover:bg-black hover:text-neutral-900 dark:hover:text-white hover:border-neutral-700 dark:hover:border-neutral-300 transition-colors duration-300",
      { "pointer-events-none opacity-40": disableNext }
    ],
    "class:list"
  )}>»</a> </div>`;
}, "/home/ubuntu_wsl/main-blog/src/components/pagination.astro", void 0);

export { $$Pagination as $ };
