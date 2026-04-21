/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DA_5307C.mjs';
import { $ as $$Main } from '../chunks/main_CDnNHdgm.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BoIqDeNG.mjs';
import { $ as $$Button } from '../chunks/button_CxsIsoUp.mjs';
export { renderers } from '../renderers.mjs';

const errorImg = new Proxy({"src":"/_astro/error-404.Ox42KQdE.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ubuntu_wsl/main-blog/src/images/error-404.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, { "title": "AiMirghani | 404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7 place-content-center px-4 text-center z-50"> ${renderComponent($$result2, "Image", $$Image, { "src": errorImg, "alt": "404", "width": "250", "height": "250", "class": "mt-10" })} <h1 class="text-5xl font-bold text-neutral-700">Page Not Found</h1> <p class="text-2xl mb-10 font-semibold text-neutral-600">
Sorry, we couldn't find the page you were looking for.
</p> ${renderComponent($$result2, "Button", $$Button, { "text": "Go Back Home", "link": "/" })} </div> ` })}`;
}, "/home/ubuntu_wsl/main-blog/src/pages/404.astro", void 0);

const $$file = "/home/ubuntu_wsl/main-blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
