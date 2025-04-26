<script>
	import { Mail, MapPin, Twitter, Github, Rss } from "@lucide/svelte";
</script>

<footer
	class="fixed bottom-0 left-0 w-full h-12 px-4 md:px-8 flex items-centered justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 text-sm z-50"
>
	<!-- Left text-->
	<div class="sm:block py-3 text-gray-600 dark:text-gray-400">
		<p>
			© 2025 El Baúl del Friki. Código disponible bajo licencia <a
				href="https://opensource.org/licenses/MIT"
				target="_blank"
				rel="noopener noreferrer">MIT</a
			>.
		</p>
	</div>

	<!-- Social & Contact -->
	<div class="flex items-center space-x-4 text-gray-800 dark:text-gray-100">
		<a href="mailto:richard@elbauldelfriki.com" aria-label="Correo">
			<Mail class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a href="https://x.com/kurai021" target="_blank" rel="noopener">
			<Twitter class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a href="https://github.com/kurai021" target="_blank" rel="noopener">
			<Github class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a href="/feed.xml" target="_blank" rel="noopener">
			<Rss class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
		<a
			href="https://www.google.com/maps/place/Los+Algarrobos,+Provincia+de+Veraguas/@8.082969,-81.3396276,63498m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8fae6dd89d9f08c3:0x22d4a80d57ca4e50!8m2!3d8.0899554!4d-81.0423429!16s%2Fg%2F11bw8dwhqb?entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D"
			target="_blank"
			rel="noopener"
		>
			<MapPin class="w-5 h-5 hover:text-blue-500 transition-colors" />
		</a>
	</div>
</footer>
