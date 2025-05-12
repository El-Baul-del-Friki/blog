<script>
	import { onMount } from "svelte";
	import { Moon, Sun, Menu } from "@lucide/svelte";
	import Logo from "../images/logo.svg";
	import LogoWhite from "../images/logo-white.svg";

	let darkMode = false;
	let menuOpen = false;
	let currentPath = "/";

	let showCategories = false;
	const categorias = ["General", "Cartas", "Arte", "Whisky"];

	onMount(() => {
		// Detectar ruta actual
		currentPath = window.location.pathname;

		// Al montar el componente revisa si ya hay preferencia guardada
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme === "dark") {
			darkMode = true;
			document.documentElement.classList.add("dark");
		} else {
			darkMode = false;
			document.documentElement.classList.remove("dark");
		}
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function isActive(path) {
		return currentPath === path || currentPath.startsWith(path);
	}

	function toggleDropdown() {
		showCategories = !showCategories;
	}
</script>

<header class="fixed w-full z-50">
	<nav
		class="flex items-center justify-between border-b px-6 py-4 text-sm font-medium uppercase bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 tracking-wider"
	>
		<!-- Logo -->
		<div class="flex items-center">
			{#if darkMode}
				<img
					src={LogoWhite.src}
					alt="Logo oscuro"
					class="h-8 transition-opacity duration-300"
				/>
			{:else}
				<img
					src={Logo.src}
					alt="Logo claro"
					class="h-8 transition-opacity duration-300"
				/>
			{/if}
		</div>

		<!-- Nav Links (desktop) -->
		<ul class="hidden md:flex space-x-6">
			<li>
				<a
					href="/"
					class={`transition-colors hover:text-blue-500 ${
						currentPath === "/"
							? "text-gray-700 dark:text-gray-300 underline font-bold"
							: "text-gray-700 dark:text-gray-300"
					}`}>Home</a
				>
			</li>
			<li>
				<button
					on:click={toggleDropdown}
					class={`text-sm uppercase transition-colors hover:text-blue-500 ${
						currentPath.startsWith("/categorias/")
							? "text-gray-700 dark:text-gray-300 underline font-bold"
							: "text-gray-700 dark:text-gray-300"
					}`}
				>
					Categorías
				</button>
				{#if showCategories}
					<ul
						class="absolute mt-2 bg-white dark:bg-gray-800 border rounded shadow text-sm z-50"
					>
						{#each categorias as cat}
							<li>
								<a
									href={`/categorias/${cat.toLowerCase()}`}
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
								>
									{cat}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
			<li>
				<a
					href="/seguimiento"
					class={`transition-colors hover:text-blue-500 ${
						currentPath === "/seguimiento"
							? "text-gray-700 dark:text-gray-300 underline font-bold"
							: "text-gray-700 dark:text-gray-300"
					}`}>Seguimiento de Precios</a
				>
			</li>
			<li>
				<a
					href="/servicios"
					class={`transition-colors hover:text-blue-500 ${
						currentPath === "/servicios"
							? "text-gray-700 dark:text-gray-300 underline font-bold"
							: "text-gray-700 dark:text-gray-300"
					}`}>Servicios Premium</a
				>
			</li>
      <li>
				<a
					href="/contacto"
					class={`transition-colors hover:text-blue-500 ${
						currentPath === "/contacto"
							? "text-gray-700 dark:text-gray-300 underline font-bold"
							: "text-gray-700 dark:text-gray-300"
					}`}>Contacto</a
				>
			</li>
		</ul>

		<!-- Nav Links (mobile dropdown) -->
		{#if menuOpen}
			<ul
				class="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t px-6 py-4 space-y-4 text-sm z-10"
			>
				<li>
					<a
						href="/"
						class={`block ${
							currentPath === "/"
								? "text-gray-700 dark:text-gray-300 underline font-bold"
								: "text-gray-700 dark:text-gray-300"
						}`}
						on:click={() => (menuOpen = false)}>Home</a
					>
				</li>
				<li>
					<button
						on:click={toggleDropdown}
						class={`text-sm uppercase ${
							currentPath.startsWith("/categorias/")
								? "text-gray-700 dark:text-gray-300 underline font-bold"
								: "text-gray-700 dark:text-gray-300"
						}`}
					>
						Categorías
					</button>
					{#if showCategories}
						<ul
							class="mt-2 bg-white dark:bg-gray-800 border rounded shadow text-sm z-50"
						>
							{#each categorias as cat}
								<li>
									<a
										href={`/categorias/${cat.toLowerCase()}`}
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
									>
										{cat}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
				<li>
					<a
						href="/seguimiento"
						class={`block ${
							currentPath === "/seguimiento"
								? "text-gray-700 dark:text-gray-300 underline font-bold"
								: "text-gray-700 dark:text-gray-300"
						}`}
						on:click={() => (menuOpen = false)}
						>Seguimiento de Precios</a
					>
				</li>
				<li>
					<a
						href="/servicios"
						class={`block ${
							currentPath === "/servicios"
								? "text-gray-700 dark:text-gray-300 underline font-bold"
								: "text-gray-700 dark:text-gray-300"
						}`}
						on:click={() => (menuOpen = false)}>Servicios Premium</a
					>
				</li>
        <li>
					<a
						href="/contacto"
						class={`block ${
							currentPath === "/contacto"
								? "text-gray-700 dark:text-gray-300 underline font-bold"
								: "text-gray-700 dark:text-gray-300"
						}`}
						on:click={() => (menuOpen = false)}>Contacto</a
					>
				</li>
			</ul>
		{/if}

		<!-- Right section -->
		<div class="flex items-center space-x-4">
			<!-- Dark mode switch -->
			<button
				on:click={toggleDarkMode}
				class="flex items-center space-x-1 border px-2 py-1 rounded-full"
			>
				<Sun class="w-4 h-4" />
				<div
					class="w-5 h-3 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center"
				>
					<div
						class="w-2 h-2 bg-black dark:bg-white rounded-full transition-transform transform"
						class:translate-x-3={darkMode}
					></div>
				</div>
				<Moon class="w-4 h-4" />
			</button>

			<!-- Hamburger icon -->
			<button
				class="md:hidden"
				on:click={toggleMenu}
				aria-label="Toggle menu"
			>
				<Menu class="w-6 h-6" />
			</button>
		</div>
	</nav>
</header>
