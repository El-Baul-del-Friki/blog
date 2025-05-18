import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$Image = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Image;
  const {
    src,
    alt = "",
    className = "",
    width = "auto",
    height = "auto"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center my-6"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(`max-w-full h-auto ${className}`, "class")} loading="lazy"> </div>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/Image.astro", void 0);

export { $$Image as $ };
