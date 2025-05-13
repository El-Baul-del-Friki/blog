<script>
	export let cards = [];

	let currentIndex = 0;
	let visibleCount = 1;
	let modalOpen = false;
	let modalImage = null;

	const updateVisibleCount = () => {
		const width = window.innerWidth;
		if (width >= 1024) visibleCount = 3;
		else if (width >= 640) visibleCount = 2;
		else visibleCount = 1;
	};

	const slideLeft = () => {
		if (currentIndex > 0) currentIndex--;
	};

	const slideRight = () => {
		if (currentIndex < cards.length - visibleCount) currentIndex++;
	};

	const openModal = (img) => {
		modalImage = img;
		modalOpen = true;
	};

	const closeModal = () => {
		modalOpen = false;
		modalImage = null;
	};

	// Init on mount
	import { onMount } from "svelte";
	onMount(() => {
		updateVisibleCount();
		window.addEventListener("resize", updateVisibleCount);
	});
</script>

<div class="carousel-wrapper mt-4">
	<button
		class="carousel-button left-btn dark:text-black"
		on:click={slideLeft}
		disabled={currentIndex === 0}
	>
		&larr;
	</button>

	<div
		class="carousel-track"
		style="transform: translateX(-{(100 / visibleCount) * currentIndex}%);"
	>
		{#each cards as img, i}
			<figure
				class="max-w-lg carousel-item"
				style="width: {100 / visibleCount}%"
				on:click={() => openModal(img)}
			>
				<img
					class="h-auto max-w-full rounded-lg aspect-[2/3] object-cover object-center transition-transform duration-200 hover:scale-105 shadow-md"
					src={img.src}
					alt={img.caption || `Image ${i + 1}`}
				/>
				{#if img.caption}
					<figcaption
						class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
					>
						{img.caption}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</div>

	<button
		class="carousel-button right-btn dark:text-black"
		on:click={slideRight}
		disabled={currentIndex >= cards.length - visibleCount}
	>
		&rarr;
	</button>
</div>

{#if modalOpen}
	<div class="modal" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<button class="close-btn dark:text-black" on:click={closeModal}
				>&times;</button
			>
			<img src={modalImage.src} alt="Zoomed image" />
			{#if modalImage.caption}
				<p class="mt-2 text-white text-sm">{modalImage.caption}</p>
			{/if}
		</div>
	</div>
{/if}

<style>
	.carousel-wrapper {
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.carousel-track {
		display: flex;
		transition: transform 0.3s ease;
	}

	.carousel-item {
		flex: 0 0 auto;
		padding: 0.5rem;
		box-sizing: border-box;
		text-align: center;
		position: relative;
	}

	.carousel-item img {
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
	}

	.carousel-item:hover img {
		box-shadow: 0 4px 16px rgba(255, 0, 0, 0.3);
	}

	.carousel-item figcaption {
		margin-top: 0.25rem;
		font-size: 0.75rem;
	}

	.carousel-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		background-color: rgba(255, 255, 255, 0.7);
		border: none;
		padding: 0.5rem;
		cursor: pointer;
	}

	.left-btn {
		left: 0;
	}

	.right-btn {
		right: 0;
	}

	.modal {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
	}

	.modal-content {
		max-width: 90%;
		max-height: 90%;
		position: relative;
		text-align: center;
	}

	.modal-content img {
		max-width: 100%;
		max-height: 80vh;
		border-radius: 0.5rem;
	}

	.close-btn {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: white;
		border: none;
		font-size: 1.25rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		border-radius: 0.25rem;
	}
</style>
