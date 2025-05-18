import { p as push, f as fallback, e as ensure_array_like, c as attr, k as attr_style, d as escape_html, g as bind_props, a as pop, l as stringify } from './_@astro-renderers_Bh0dXl76.mjs';
/* empty css                                                              */

function CardCarousel($$payload, $$props) {
	push();

	let cards = fallback($$props['cards'], () => [], true);
	let currentIndex = 0;
	let visibleCount = 1;

	const each_array = ensure_array_like(cards);

	$$payload.out += `<div class="carousel-wrapper mt-4 svelte-mr878u"><button class="carousel-button left-btn dark:text-black svelte-mr878u"${attr('disabled', currentIndex === 0, true)}>←</button> <div class="carousel-track svelte-mr878u"${attr_style(`transform: translateX(-${stringify(100 / visibleCount * currentIndex)}%);`)}><!--[-->`;

	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let img = each_array[i];

		$$payload.out += `<figure class="max-w-lg carousel-item svelte-mr878u"${attr_style(`width: ${stringify(100 / visibleCount)}%`)}><img class="h-auto max-w-full rounded-lg aspect-[2/3] object-cover object-center transition-transform duration-200 hover:scale-105 shadow-md svelte-mr878u"${attr('src', img.src)}${attr('alt', img.caption || `Image ${i + 1}`)}> `;

		if (img.caption) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 svelte-mr878u">${escape_html(img.caption)}</figcaption>`;
		} else {
			$$payload.out += '<!--[!-->';
		}

		$$payload.out += `<!--]--></figure>`;
	}

	$$payload.out += `<!--]--></div> <button class="carousel-button right-btn dark:text-black svelte-mr878u"${attr('disabled', currentIndex >= cards.length - visibleCount, true)}>→</button></div> `;

	{
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
	bind_props($$props, { cards });
	pop();
}

export { CardCarousel as C };
