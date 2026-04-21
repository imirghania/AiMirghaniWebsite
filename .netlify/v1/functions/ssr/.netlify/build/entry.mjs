import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BjhGq5l7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/article/_---slug_.astro.mjs');
const _page4 = () => import('./pages/blog/tag/_---tag_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/texts/aboutme.astro.mjs');
const _page9 = () => import('./pages/texts/introcode.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.12.2_@types+node@20.14.9_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/article/[...slug].astro", _page3],
    ["src/pages/blog/tag/[...tag].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/texts/aboutMe.md", _page8],
    ["src/pages/texts/introCode.md", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c5f9dd77-b20f-4e36-b14e-54129e3d44bd"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
