import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'clsx';

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$H3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H3;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${spreadAttributes(props)} class="text-2xl"> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/H3.astro", void 0);

export { $$H3 as $ };
