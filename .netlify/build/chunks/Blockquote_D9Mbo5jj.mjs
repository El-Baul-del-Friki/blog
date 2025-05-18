import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'clsx';

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$Blockquote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blockquote;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote${spreadAttributes(props)} class="text-xl italic font-semibold text-gray-900 dark:text-white"> <p> ${renderSlot($$result, $$slots["default"])} </p> </blockquote>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/Blockquote.astro", void 0);

export { $$Blockquote as $ };
