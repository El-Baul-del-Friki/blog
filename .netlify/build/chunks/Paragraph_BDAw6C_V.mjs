import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://elbauldelfriki.com");
const $$H2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$H2;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${spreadAttributes(props)} class="text-3xl"> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/H2.astro", void 0);

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${spreadAttributes(props)} class="my-4 text-lg"> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/Paragraph.astro", void 0);

export { $$H2 as $, $$Paragraph as a };
