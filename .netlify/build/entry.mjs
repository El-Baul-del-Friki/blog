import { r as renderers } from './chunks/_@astro-renderers_Bh0dXl76.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_mrysHEwW.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/categorias/_categoria_.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/feed.xml.astro.mjs');
const _page6 = () => import('./pages/seguimiento.astro.mjs');
const _page7 = () => import('./pages/servicios.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.ts", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/categorias/[categoria].astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/feed.xml.js", _page5],
    ["src/pages/seguimiento.astro", _page6],
    ["src/pages/servicios.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "878edcb9-e323-4644-a693-bf36fd8fc16a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
