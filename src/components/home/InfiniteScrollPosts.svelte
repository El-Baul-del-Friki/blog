<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	export let initialPosts: any[]; // Post iniciales cargados desde Astro
	export let totalPostsCount: number; // Total de posts disponibles
	export let initialSkip: number; // Cuántos posts se han cargado inicialmente
	export let categoryColors: { [key: string]: string }; // Colores de categoría

	let posts = initialPosts;
	let skip = initialSkip;
	let loading = false;
	let hasMore = posts.length < totalPostsCount; // true si quedan más posts por cargar

	let observer: IntersectionObserver;
	let bottomElement: HTMLElement; // Elemento para observar el final de la página

	const loadMorePosts = async () => {
		if (loading || !hasMore) {
			return;
		}

		loading = true;
		try {
			const response = await fetch(
				`/api/posts.json?skip=${skip}&limit=6`
			); // Límite de 6 por cada carga adicional
			const newPosts = await response.json();

			posts = [...posts, ...newPosts];
			skip += newPosts.length;
			hasMore = posts.length < totalPostsCount;
		} catch (error) {
			console.error("Error al cargar más posts:", error);
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore && !loading) {
					loadMorePosts();
				}
			},
			{
				rootMargin: "0px 0px 200px 0px", // Carga 200px antes de llegar al final
			}
		);

		if (bottomElement) {
			observer.observe(bottomElement);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<section
	class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-6 my-10"
>
	{#if posts.length}
		{#each posts.filter((p) => p?.slug) as post (post.slug)}
			<article
				class="bg-white dark:bg-gray-900 rounded-2xl shadow p-4 transition"
			>
				{#if post.featuredImage?.src}
					<img
						src={post.featuredImage.src}
						alt={post.title}
						class="rounded-xl mb-4 w-full object-cover max-h-60"
						loading="lazy"
					/>
				{/if}
				<h2 class="text-2xl font-bold mb-2">{post.title}</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
					Publicado:
					{new Date(post.date).toLocaleDateString("es-PA", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
				<div class="flex flex-wrap gap-2 mb-3">
					{#if typeof post.category === "string"}
						{#each post.category.split(",") as category}
							<span
								class={`px-2 py-1 text-xs font-medium rounded ${categoryColors[category.trim()] || "bg-gray-200 text-gray-800"}`}
							>
								{category.trim()}
							</span>
						{/each}
					{:else}
						<span
							class="px-2 py-1 text-xs font-medium rounded bg-gray-200 text-gray-800"
						>
							Sin categoría
						</span>
					{/if}
				</div>
				<p class="text-sm">
					{post.excerpt}..
					<a
						href={`/blog/${post.slug}`}
						class="text-blue-600 dark:text-blue-400 underline text-sm"
					>
						Leer más
					</a>
				</p>
			</article>
		{/each}
	{/if}

	{#if loading}
		<p class="col-span-full text-center text-gray-600 dark:text-gray-300">
			Cargando más posts...
		</p>
	{:else if !hasMore && posts.length > 0}
		<p class="col-span-full text-center text-gray-600 dark:text-gray-300">
			No hay más posts para mostrar.
		</p>
	{:else if posts.length === 0}
		<p class="col-span-full text-center text-gray-600 dark:text-gray-300">
			No se encontraron posts.
		</p>
	{/if}

	<div bind:this={bottomElement} class="col-span-full h-1"></div>
</section>
