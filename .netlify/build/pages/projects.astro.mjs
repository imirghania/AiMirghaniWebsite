/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DA_5307C.mjs';
import { $ as $$PageHeading } from '../chunks/page-heading_DNaoVok4.mjs';
import { $ as $$Project } from '../chunks/project_CX4Q3ygk.mjs';
import { P as PROJECTS_PER_PAGE, $ as $$Main } from '../chunks/main_CDnNHdgm.mjs';
import { a as getCollection } from '../chunks/_astro_content_DDJfDPyh.mjs';
import { $ as $$Pagination } from '../chunks/pagination_X7HoJITW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allProjects = (await getCollection("projects")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).filter((project) => project.data.isPublished);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const projectsPerPage = allProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "AiMirghani - Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-40 max-w-2xl mx-auto my-12 px-7 lg:px-0"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "label": "$ ls projects", "title": "My Projects", "description": "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!" })} <div class="z-50 grid items-stretch w-full grid-cols-1 mt-8 mb-16 gap-7 sm:gap-5 sm:grid-cols-2"> ${projectsPerPage.map((project) => {
    return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "name": project.data.title, "description": project.data.description, "image": project.data.image, "url": project.data.url })}`;
  })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Pagination", $$Pagination, { "pageType": "projects", "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </div> </section> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/projects.astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
