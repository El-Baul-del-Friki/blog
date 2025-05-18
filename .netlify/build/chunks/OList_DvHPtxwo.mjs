import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'clsx';

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$OList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OList;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ol${spreadAttributes(props)} class="space-y-1 my-4 text-lg list-decimal list-inside"> ${renderSlot($$result, $$slots["default"])} </ol>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/OList.astro", void 0);

export { $$OList as $ };
