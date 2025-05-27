<script>
	import CommentsListItem from "./CommentsListItem.svelte"; // Componente para cada comentario
	//import { getSession } from "auth-astro/client"; // Para obtener la sesión en el cliente si es necesario

	export let comments = []; // La lista de comentarios se pasa como prop
	export let currentUserEmail; // Del padre CommentsSection.svelte
	export let currentUserUserId; // Del padre CommentsSection.svelte

	// Dispatch para enviar el evento 'edit' hacia arriba
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	function handleEdit(comment) {
		dispatch("edit", comment); // Emite el evento 'edit' con el comentario a editar
	}

	// ¡¡¡NUEVA FUNCIÓN QUE FALTABA PARA EL EVENTO 'delete'!!!
	function handleDelete(commentId) {
		// Recibe el ID del evento de CommentsListItem
		console.log(
			'CommentsList: Recibido evento "delete" de item con ID:',
			commentId
		); // Log para depuración
		dispatch("delete", commentId); // Re-despacha el evento 'delete' hacia CommentsSection
	}

	// Si CommentsList.svelte gestionara la carga de datos por sí mismo,
	// la lógica loadComments iría aquí y ya no necesitarías la prop 'comments'.
</script>

<div class="comments-list">
	{#if comments.length > 0}
		{#each comments as comment (comment.id)}
			<CommentsListItem
				{comment}
				{currentUserEmail}
				{currentUserUserId}
				on:edit={() => handleEdit(comment)}
				on:delete={() => handleDelete(comment.id)}
			/>
		{/each}
	{:else}
		<p class="text-gray-500 dark:text-gray-400">
			No hay comentarios aún. ¡Sé el primero en comentar!
		</p>
	{/if}
</div>
