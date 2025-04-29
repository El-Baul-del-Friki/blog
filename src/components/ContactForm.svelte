<script>
	import { X } from "@lucide/svelte";
	let isOpen = false;

	function openModal() {
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}
</script>

<button
	on:click={openModal}
	class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition mt-4"
>
	Abrir Formulario
</button>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
	>
		<div
			class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-lg w-full p-6 relative"
		>
			<button
				class="absolute top-3 right-4 text-gray-500 hover:text-black dark:hover:text-white"
				on:click={closeModal}
			>
				<X />
			</button>

			<h1 class="text-2xl font-semibold mb-4">Contáctame</h1>

			<p>
				Serás redireccionado a un servicio externo en una nueva pestaña
				al presionar enviar. No te preocupes, esto es normal.
			</p>

			<form
				action="https://forms.zohopublic.com/richardelbauld1/form/ElBaldelFrikiContacto/formperma/M7skHwIP3WAKj1XBKic_DS619FpTZ0uw40QY1M2VWDY/htmlRecords/submit"
				method="POST"
				target="_blank"
				accept-charset="UTF-8"
				enctype="multipart/form-data"
				class="space-y-4"
			>
				<input type="hidden" name="zf_referrer_name" value="" />
				<input type="hidden" name="zf_redirect_url" value="" />
				<input type="hidden" name="zc_gad" value="" />

				<div class="flex gap-2">
					<input
						type="text"
						name="Name_First"
						placeholder="Nombre"
						class="w-1/2 px-3 py-2 border rounded"
						required
					/>
					<input
						type="text"
						name="Name_Last"
						placeholder="Apellido"
						class="w-1/2 px-3 py-2 border rounded"
					/>
				</div>

				<input
					type="email"
					name="Email"
					placeholder="ejemplo@correo.com"
					class="w-full px-3 py-2 border rounded"
					required
				/>

				<input
					type="text"
					name="SingleLine"
					placeholder="Asunto"
					class="w-full px-3 py-2 border rounded"
				/>

				<textarea
					name="MultiLine"
					placeholder="Escribe tu mensaje..."
					class="w-full px-3 py-2 border rounded"
					rows="5"
					required
				></textarea>

				<button
					type="submit"
					class="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
				>
					Enviar
				</button>
			</form>
		</div>
	</div>
{/if}
