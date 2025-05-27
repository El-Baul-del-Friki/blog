<script>
	// Importa las acciones de Astro para que Svelte las pueda llamar (via fetch/form submit)
	// No necesitas getSession en el cliente si ya la pasas como prop
	import { actions, isInputError } from "astro:actions";
	import { createEventDispatcher } from "svelte";
	// import { getSession } from "auth-astro/client"; // Necesario si quieres el usuario en el cliente

	export let postSlug;
	export let commentToEdit = null; // Default null
	export let session; // Recibimos la sesión como prop del padre Svelte

	// Usamos el `session` prop directamente
	$: user = session?.user;

	// Determine la acción a usar (addComment o updateComment)
	$: formAction = commentToEdit ? actions.updateComment : actions.addComment;
	$: buttonText = commentToEdit
		? `Guardar cambios de ${user?.name}`
		: `Publicar como ${user?.name}`;

	// Estado local para el mensaje del comentario en el textarea
	let message = commentToEdit ? commentToEdit.message : "";
	$: message = commentToEdit ? commentToEdit.message : ""; // Se actualiza si commentToEdit cambia

	// Manejo de errores de la acción (esto es más complejo en el cliente)
	// Normalmente, después de un submit, recargarías la página o la lista de comentarios.
	// Para mostrar errores, deberías manejar la respuesta del form en el cliente o
	// recargar la página y que Astro lo haga. Por ahora, nos quedamos con lo básico.
	let inputErrors = {}; // Podrías manejar errores aquí si tu action los devuelve como JSON

	const dispatch = createEventDispatcher();

	async function handleSubmit(event) {
		// Evita el envío por defecto para manejarlo con fetch o acciones de Astro
		event.preventDefault();

		const formData = new FormData(event.target);
		formData.set("message", message); // Asegura que el mensaje del estado se envíe

		if (commentToEdit) {
			formData.set("id", commentToEdit.id); // Asegura que el ID se envíe en modo edición
		}

		try {
			// Envía el formulario a la Astro Action
			const response = await fetch(formAction, {
				method: "POST", // Siempre POST para form actions
				body: formData,
			});

			if (!response.ok) {
				// Manejo de errores de la acción (si la acción arroja un error con un status code)
				const errorData = await response.json();
				console.error("Error submitting form:", errorData);
				// Aquí podrías parsear errorData para llenar inputErrors
				if (errorData && errorData.fields) {
					inputErrors = errorData.fields;
				} else {
					alert(
						errorData.message || "Error al enviar el comentario."
					);
				}
				return;
			}

			// Éxito:
			message = ""; // Limpia el textarea
			inputErrors = {}; // Limpia errores
			dispatch("submitted"); // Notifica al padre (CommentsSection.svelte) que se ha enviado
			// Puedes querer recargar la página o actualizar la lista de comentarios aquí
			// location.reload(); // Si quieres recargar la página completamente
		} catch (error) {
			console.error("Network or other error:", error);
			alert("Hubo un problema de red al enviar el comentario.");
		}
	}
</script>

{#if !user}
	<div
		class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6"
	>
		<p>
			Debes{" "}
			<a href="/api/auth/signin" class="underline font-semibold">
				iniciar sesión
			</a>{" "}
			para comentar.
		</p>
	</div>
{:else}
	<form
		on:submit|preventDefault={handleSubmit}
		class="mb-8"
		data-astro-no-view-transition
	>
		<input type="hidden" name="postSlug" value={postSlug} />
		{#if commentToEdit}
			<input type="hidden" name="id" value={commentToEdit.id} />
		{/if}
		<input type="hidden" name="userId" value={user.name} />
		<input type="hidden" name="email" value={user.email} />

		<div class="mb-4">
			<p>
				<a href="/api/auth/signout" class="underline font-semibold">
					cerrar sesión
				</a>
			</p>
			<label for="message">Comentario:</label>
			<textarea
				id="message"
				name="message"
				required
				class="w-full p-2 border rounded"
				bind:value={message}
			/>
			{#if inputErrors.message}
				<p class="text-red-500">{inputErrors.message}</p>
			{/if}
		</div>

		<button
			type="submit"
			class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
		>
			{buttonText}
		</button>
	</form>
{/if}
