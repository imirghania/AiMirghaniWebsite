/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, d as addAttribute } from '../chunks/astro/server_DA_5307C.mjs';
import { $ as $$Button } from '../chunks/button_CxsIsoUp.mjs';
import { $ as $$Project } from '../chunks/project_CX4Q3ygk.mjs';
import { a as getCollection } from '../chunks/_astro_content_CMfFCbkr.mjs';
import { $ as $$Separator } from '../chunks/separator_CZzneCoQ.mjs';
import { $ as $$PostCard } from '../chunks/post-card_Dhzn372K.mjs';
import { $ as $$Main } from '../chunks/main_VerNqDWG.mjs';
import { C as Content } from '../chunks/introCode_BRJaHQ3W.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$TypeWriting = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg overflow-hidden border border-neutral-700/60 shadow-xl shadow-black/30 font-mono text-xs md:text-sm w-full"> <!-- Title bar --> <div class="flex items-center gap-1.5 px-3 py-2 bg-[#1c2128] border-b border-neutral-700/50"> <span class="w-3 h-3 rounded-full bg-red-500/80"></span> <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span> <span class="w-3 h-3 rounded-full bg-green-500/80"></span> <span class="ml-2 text-neutral-500 text-xs tracking-wide">ahmed@ai — ~/skills</span> </div> <!-- Terminal body --> <div class="bg-[#0d1117] px-4 py-3 leading-relaxed" style="min-height: 4.5rem;"> <span class="text-green-400">(venv) ahmed@ai:~$&nbsp;</span> <span id="typing" class="text-fuchsia-400"></span> </div> </div> `;
}, "/home/ubuntu_wsl/main-blog/src/components/home/typeWriting.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = (await getCollection("projects")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const recentProjects = allProjects.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto px-7 lg:px-0"> <p class="font-mono text-xs text-violet-500 dark:text-fuchsia-400 uppercase tracking-widest mb-3">
$ ls projects
</p> <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
My Projects
</h2> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
Here are some of my recent projects. I'm always working on something new, so
    check back often!
</p> <div class="grid items-stretch w-full sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7"> ${recentProjects.map((project) => {
    return renderTemplate`${renderComponent($$result, "Project", $$Project, { "name": project.data.title, "description": project.data.description, "image": project.data.image, "url": project.data.url })}`;
  })} </div> <div class="flex items-center justify-center w-full py-5"> ${renderComponent($$result, "Button", $$Button, { "text": "View All My Projects", "link": "/projects" })} </div> </section>`;
}, "/home/ubuntu_wsl/main-blog/src/components/home/projects.astro", void 0);

const $$Astro = createAstro("https://ahmed.imirghani.com/");
const $$PostsLoop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostsLoop;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).filter((article) => article.data.isPublished);
  const { count } = Astro2.props;
  const postsLoop = allBlogArticles.slice(0, count);
  return renderTemplate`${postsLoop.map((post) => {
    return renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`;
  })}`;
}, "/home/ubuntu_wsl/main-blog/src/components/post/posts-loop.astro", void 0);

const $$Writings = createComponent(($$result, $$props, $$slots) => {
  const feed = "https://ahmed.imirghani.com/feed";
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto px-7 lg:px-0"> <p class="font-mono text-xs text-violet-500 dark:text-fuchsia-400 uppercase tracking-widest mb-3">
$ cat articles
</p> <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
Recent Articles
</h2> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
Along with coding I also like to write about life and technology. Here are
    some of my recent posts.
</p> <div class="w-full max-w-4xl mx-auto my-7 xl:px-0"> <div class="flex flex-col items-start justify-start md:flex-row md:space-x-7"> <div class="w-full md:w-2/3 space-y-7"> ${renderComponent($$result, "PostsLoop", $$PostsLoop, { "count": "3" })} <div class="flex items-center justify-center w-full py-5"> ${renderComponent($$result, "Button", $$Button, { "text": "View All Articles", "link": "/blog" })} </div> </div> <div class="w-full mt-10 md:w-1/3 md:mt-0"> <form method="get"${addAttribute(feed, "action")} class="p-6 border rounded-xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"> <div class="relative flex items-center space-x-2"> <svg class="flex-none w-6 h-6 text-neutral-700 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg> <h2 class="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
Subscribe to my blog
</h2> </div> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
Get my blog updates via <a class="font-bold"${addAttribute(`https://feedly.com/i/subscription/feed%2F${encodeURIComponent(feed)}`, "href")}>Feedly</a>, <a class="font-bold"${addAttribute(`https://www.inoreader.com/feed/${encodeURIComponent(feed)}`, "href")}>Inoreader</a> or <a class="font-bold"${addAttribute(feed, "href")}>RSS</a>.
</p> <div class="flex flex-col items-center w-full mt-4 space-y-3"> <input type="url" readonly placeholder="Email address" aria-label="Email address" required=""${addAttribute(feed, "value")} class="w-full h-10 px-3 text-sm border rounded-md focus:ring-0 focus:outline-black border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-white"> <button type="submit" class="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded bg-neutral-900 dark:bg-neutral-100 dark:hover:border-neutral-300 dark:text-neutral-800 dark:hover:bg-neutral-950 dark:hover:text-neutral-100 text-neutral-100 border-neutral-900 hover:bg-white hover:text-neutral-900">Subscribe</button> </div> </form> </div> </div> </div> </section>`;
}, "/home/ubuntu_wsl/main-blog/src/components/home/writings.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative z-30 w-full max-w-4xl mx-auto mt-16 px-7 xl:px-0 sm:max-h-75"> <div class="flex flex-col items-center md:flex-row"> <!-- hero section - intro + terminal --> <div class="relative w-full md:w-1/2"> <h1 class="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-900 to-fuchsia-700">
Hello,
</h1> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400 text-justify">
I'm a Data Scientist👨‍🔬, a father👪, and an open-source believer 🙌. I'm passionate about teaching machines to see the world through Computer Vision, automating intelligent decisions with Agentic AI, and uncovering stories hidden in data — one line of Python at a time.
<br class="hidden lg:block"> <br class="hidden lg:block"> </p> <p class="mb-2 font-mono text-xs text-violet-500 dark:text-fuchsia-400 uppercase tracking-widest">
$ I can help with ↴
</p> ${renderComponent($$result2, "TypeWriting", $$TypeWriting, {})} <br class="hidden lg:block"> ${renderComponent($$result2, "Button", $$Button, { "text": "Read my Articles", "link": "/blog" })} </div> <!-- hero section - Intro code --> <div class="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0"> <div class="relative z-50 content"> ${renderComponent($$result2, "IntroCodeContent", Content, {})} </div> </div> </div> </div> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Check out my projects" })} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Separator", $$Separator, { "text": "Some of my writing" })} ${renderComponent($$result2, "Writings", $$Writings, {})} ` })} `;
}, "/home/ubuntu_wsl/main-blog/src/pages/index.astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
