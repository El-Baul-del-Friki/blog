<script>
	import { createEventDispatcher } from "svelte";

	export let comment; // Prop: el objeto del comentario
	export let currentUserEmail; // Prop: email del usuario logueado
	export let currentUserUserId; // Prop: nombre/ID del usuario logueado

	const dispatch = createEventDispatcher();

	function handleEditClick() {
		dispatch("edit", comment); // Emite un evento 'edit' con el comentario
	}

	// Nuevo manejador para el botón eliminar
	function handleDeleteClick() {
		// Opcional: Confirmación al usuario
		console.log("Botón Eliminar clicado para ID:", comment.id); // <-- ¡AÑADIDO PARA DEPURAR!
		if (confirm("¿Estás seguro de que quieres eliminar este comentario?")) {
			dispatch("delete", comment.id); // Solo despacha si el usuario confirma
		}
	}

	// Comprueba si el usuario actual es el autor del comentario
	$: isAuthor =
		currentUserEmail === comment.email &&
		currentUserUserId === comment.userId;
</script>

<div class="comment-item border-b py-4">
	<p class="font-bold">{comment.userId} ({comment.email})</p>
	<p class="text-gray-600 text-sm">
		{new Date(comment.createdAt).toLocaleDateString()}
	</p>
	<p class="mt-2">{comment.message}</p>

	{#if isAuthor}
		<div class="mt-2 flex space-x-4">
			<button
				on:click={handleEditClick}
				class="text-blue-500 hover:underline text-sm"
			>
				Editar
			</button>
			<button
				on:click={handleDeleteClick}
				class="text-red-500 hover:underline text-sm"
			>
				Eliminar
			</button>
		</div>
	{/if}
</div>
