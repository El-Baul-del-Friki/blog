<script>
	import { ChevronLeft, ChevronRight } from "@lucide/svelte";

	export let posts = [];
	let current = 0;

	const next = () => (current = (current + 1) % posts.length);
	const prev = () => (current = (current - 1 + posts.length) % posts.length);

	const goTo = (index) => (current = index);
</script>

<div class="relative w-full overflow-hidden mb-10 mt-15">
	{#each posts as post, index}
		<div
			class={`absolute w-full h-full transition-opacity duration-500 ${index === current ? "opacity-100 relative" : "opacity-0 absolute pointer-events-none"}`}
		>
			<img
				src={post.frontmatter.featuredImage.src}
				alt={post.frontmatter.title}
				class="w-full h-90 object-cover"
			/>
			<div
				class="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white"
			>
				<h2 class="text-2xl font-bold">{post.frontmatter.title}</h2>
				<p class="text-sm mb-2">{post.frontmatter.excerpt}</p>
				<a
					href={`/blog/${post.frontmatter.slug}`}
					class="underline text-blue-200">Leer más</a
				>
			</div>
		</div>
	{/each}

	<!-- Controles -->
	<div
		class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
	>
		{#each posts as _, i}
			<div
				class={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-gray-500"} cursor-pointer`}
				on:click={() => goTo(i)}
			></div>
		{/each}
	</div>

	<button
		class="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
		on:click={prev}><ChevronLeft /></button
	>
	<button
		class="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
		on:click={next}><ChevronRight /></button
	>
</div>
