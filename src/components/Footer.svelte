<script>
	import { Mail, Twitter, Instagram, Facebook, Rss } from "@lucide/svelte";
</script>

<footer
	class="fixed bottom-0 left-0 w-full h-12 px-4 md:px-8 flex items-centered justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 text-sm z-10"
>
	<!-- Left text-->
	<div class="sm:block py-3 text-gray-600 dark:text-gray-400">
		<p>© 2025 El Baúl del Friki.</p>
	</div>

	<!-- Social & Contact -->
	<div class="flex items-center space-x-4 text-gray-800 dark:text-gray-100">
		<a href="mailto:richard@elbauldelfriki.com" aria-label="Correo">
			<Mail class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a
			href="https://www.facebook.com/people/El-Ba%C3%BAl-del-Friki/61575508633266"
			target="_blank"
			rel="noopener"
		>
			<Facebook class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a
			href="https://www.instagram.com/elbauldelfriki_"
			target="_blank"
			rel="noopener"
		>
			<Instagram class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a href="https://x.com/elbauldelfriki" target="_blank" rel="noopener">
			<Twitter class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a href="/feed.xml" target="_blank" rel="noopener">
			<Rss class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
	</div>
</footer>
