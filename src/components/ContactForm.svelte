<script lang="ts">
	import { X } from "@lucide/svelte";
	let isOpen: boolean = false;

	function openModal() {
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}

	let nombre: string = "";
	let apellido: string = "";
	let email: string = "";
	let message: string = "";
	let subject: string = ""; // Opcional, puedes añadirlo a tu form

	let statusMessage: string = "";
	let isLoading: boolean = false;
	let isSuccess: boolean | null = null;

	async function handleSubmit() {
		isLoading = true;
		statusMessage = "";
		isSuccess = null;

		// Validación básica en cliente (opcional pero recomendada)
		if (!nombre || !apellido || !email || !message) {
			statusMessage = "Por favor, completa todos los campos requeridos.";
			isSuccess = false;
			isLoading = false;
			return;
		}
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			statusMessage =
				"Por favor, introduce un correo electrónico válido.";
			isSuccess = false;
			isLoading = false;
			return;
		}

		try {
			const response = await fetch("/api/send-email", {
				// La ruta a tu API endpoint de Astro
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre,
					apellido,
					email,
					message,
					subject,
				}),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				statusMessage =
					result.message || "¡Formulario enviado con éxito!";
				isSuccess = true;
				// Limpiar formulario (opcional)
				nombre = "";
				apellido = "";
				email = "";
				message = "";
				subject = "";
			} else {
				statusMessage =
					result.error || "Ocurrió un error al enviar el formulario.";
				if (result.details) {
					statusMessage += ` Detalles: ${result.details}`;
				}
				isSuccess = false;
			}
		} catch (error) {
			console.error("Error al enviar el formulario:", error);
			statusMessage = "Error de conexión. Intenta de nuevo más tarde.";
			isSuccess = false;
		} finally {
			isLoading = false;
		}
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
		class="overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:inset-0 max-h-full"
	>
		<div
			class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-2xl w-full max-h-full p-6 relative overflow-y-auto"
		>
			<button
				class="absolute top-3 right-4 text-gray-500 hover:text-black dark:hover:text-white"
				on:click={closeModal}
			>
				<X />
			</button>

			<h1 class="text-2xl font-semibold mb-4">Contáctame</h1>

			<form
				on:submit|preventDefault={handleSubmit}
				class="space-y-4"
				data-astro-no-view-transition
			>
				<div class="flex gap-2">
					<input
						type="text"
						name="Name_First"
						placeholder="Nombre"
						bind:value={nombre}
						class="w-1/2 px-3 py-2 border rounded"
						required
					/>
					<input
						type="text"
						name="Name_Last"
						placeholder="Apellido"
						bind:value={apellido}
						class="w-1/2 px-3 py-2 border rounded"
						required
					/>
				</div>

				<input
					type="email"
					name="Email"
					placeholder="ejemplo@correo.com"
					bind:value={email}
					class="w-full px-3 py-2 border rounded"
					required
				/>

				<input
					type="text"
					name="SingleLine"
					placeholder="Asunto"
					bind:value={subject}
					class="w-full px-3 py-2 border rounded"
				/>

				<textarea
					name="MultiLine"
					placeholder="Escribe tu mensaje..."
					bind:value={message}
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
