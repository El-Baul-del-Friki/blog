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
	Comenzar gratis
</button>

{#if isOpen}
	<div
		class="overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:inset-0 max-h-full"
	>
		<div
			class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-2xl w-full max-h-full p-6 relative text-left overflow-y-auto"
		>
			<button
				class="absolute top-3 right-4 text-gray-500 hover:text-black dark:hover:text-white"
				on:click={closeModal}
			>
				<X />
			</button>

			<h1 class="text-2xl font-semibold mb-4 text-center">Contáctame</h1>

			<p>
				Serás redireccionado a un servicio externo en una nueva pestaña
				al presionar enviar. No te preocupes, esto es normal.
			</p>

			<form
				class="space-y-4"
				action="https://forms.zohopublic.com/richardelbauld1/form/ElBaldelFrikiInitiate/formperma/DexteEFIGMF8pz1Z3nymy51zbUE7S-y_iM6JMHM12B0/htmlRecords/submit"
				name="form"
				id="form"
				method="POST"
				target="_blank"
				accept-charset="UTF-8"
				enctype="multipart/form-data"
			>
				<input type="hidden" name="zf_referrer_name" value="" />
				<input type="hidden" name="zf_redirect_url" value="" />
				<input type="hidden" name="zc_gad" value="" />

				<div class="flex gap-2">
					<input
						type="text"
						maxlength="255"
						name="Name_First"
						class="w-1/2 px-3 py-2 border rounded"
						fieldType="7"
						placeholder="Nombre"
						required
					/>
					<input
						type="text"
						maxlength="255"
						name="Name_Last"
						class="w-1/2 px-3 py-2 border rounded"
						fieldType="7"
						placeholder="Apellido"
						required
					/>
				</div>

				<input
					type="email"
					maxlength="255"
					name="Email"
					value=""
					class="w-full px-3 py-2 border rounded"
					fieldType="9"
					placeholder="ejemplo@correo.com"
					required
				/>

				<p
					class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300"
				>
					¿Qué tipo de inversión te interesa?
				</p>
				<select
					name="Checkbox"
					multiple="multiple"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="Whisky">Whisky</option>
					<option value="Cartas&#x20;Coleccionables"
						>Cartas&#x20;Coleccionables</option
					>
					<option value="Arte">Arte</option>
					<option value="Otros">Otros</option>
				</select>

				<p
					class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300"
				>
					Si te interesan otros tipos de inversiones, escribe a
					continuaci&oacute;n&#x3a;
				</p>
				<input
					type="text"
					name="SingleLine"
					class="w-full px-3 py-2 border rounded"
					value=""
					fieldType="1"
					maxlength="255"
					placeholder=""
				/>

				<p
					class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300"
				>
					¿Cómo nos encontraste?
				</p>
				<input
					type="text"
					name="SingleLine1"
					class="w-full px-3 py-2 border rounded"
					value=""
					fieldType="1"
					maxlength="255"
					placeholder=""
				/>

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
