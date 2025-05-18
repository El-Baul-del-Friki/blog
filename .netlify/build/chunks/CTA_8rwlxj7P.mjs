import { a as createComponent, c as createAstro, m as maybeRenderHead, d as renderTemplate } from './astro/server_DP9oE6b1.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://elbauldelfriki.com");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const { category } = Astro2.props;
  const messages = {
    whisky: {
      title: "\xBFQuieres adentrarte en el mundo del whisky y el bourbon?",
      message: "Si est\xE1s pensando en comenzar a coleccionar whisky, bourbon u otras bebidas, escr\xEDbeme desde la secci\xF3n de contacto \u2014respondo personalmente.",
      cta: "Quiero aprender a coleccionar whisky"
    },
    cartas: {
      title: "\xBFTe atraen los TCG como Pok\xE9mon o Magic?",
      message: "Escr\xEDbeme desde la secci\xF3n de contacto, estar\xE9 encantado de ayudarte a encaminar tu colecci\xF3n.",
      cta: "Quiero aprender sobre cartas coleccionables"
    },
    arte: {
      title: "\xBFTe gustar\xEDa invertir en arte o piezas con historia?",
      message: "Puedes escribirme desde la secci\xF3n de contacto para intercambiar ideas.",
      cta: "Quiero descubrir piezas \xFAnicas"
    },
    general: {
      title: "\xBFQuieres explorar el mundo del coleccionismo?",
      message: "Escr\xEDbeme desde la secci\xF3n de contacto y te responder\xE9 pronto.",
      cta: "Quiero descubrir nuevos objetos para coleccionar"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900 mb-8"> <div class="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"> ${messages[category].title || messages.general.title} </h2> <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg"> ${messages[category].message || messages.general.message} </p> <a href="/contacto" class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">${messages[category].cta || messages.general.cta}</a> </div> </div> </section>`;
}, "/Users/richardarmuelles/Projects/el-baul-del-friki/src/components/posts/CTA.astro", void 0);

export { $$CTA as $ };
