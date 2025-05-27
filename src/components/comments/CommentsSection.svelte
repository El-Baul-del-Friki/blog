<script>
	import CommentsList from "./CommentsList.svelte";
	import CommentsForm from "./CommentsForm.svelte"; // <-- Ahora importa el Svelte
	import { actions } from "astro:actions";

	export let postSlug;
	export let session;

	let editingComment = null;
	let comments = [];

	// Función para cargar los comentarios
	async function loadComments() {
		const response = await fetch("/api/comments", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ postSlug }),
		});

		console.log("Response status for getComments:", response.status); // <-- Añade esto
		console.log("Response headers for getComments:", response.headers); // <-- Y esto

		if (!response.ok) {
			// response.ok es true para 2xx, false para 3xx, 4xx, 5xx
			// Un 304 no es 'ok', así que esto debería atraparlo.
			throw new Error(
				`HTTP error! Status: ${response.status} - ${response.statusText}`
			);
		}

		comments = await response.json();
		console.log("Loaded comments:", comments);
	}

	import { onMount } from "svelte";
	onMount(() => {
		loadComments();
	});

	function handleEditRequest(event) {
		editingComment = event.detail;
	}

	function handleFormSubmitted() {
		editingComment = null;
		loadComments(); // Recarga los comentarios después de un submit
	}

	// Nuevo manejador para el evento 'delete'
	async function handleDeleteComment(event) {
		const commentId = event.detail; // El ID del comentario a eliminar
		console.log(
			'¡Evento "delete" recibido en CommentsSection con ID:',
			commentId
		);

		try {
			// Llama a la Astro Action para eliminar el comentario
			// Aquí también puedes usar actions.deleteComment directamente en el fetch
			const response = await fetch(actions.deleteComment, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: commentId }), // Envía el ID como JSON
			});

			if (!response.ok) {
				// Manejo de errores si la acción falla en el servidor
				const errorData = await response.json(); // La acción puede devolver un error JSON
				throw new Error(
					errorData.message || "Error al eliminar el comentario."
				);
			}

			// Si la eliminación fue exitosa, recarga la lista de comentarios
			loadComments();
		} catch (error) {
			console.error("Error eliminando comentario:", error);
			alert(error.message || "No se pudo eliminar el comentario.");
		}
	}
</script>

<div class="comments-section">
	<CommentsForm
		{postSlug}
		commentToEdit={editingComment}
		on:submitted={handleFormSubmitted}
		{session}
	/>

	<CommentsList
		{comments}
		currentUserEmail={session?.user?.email}
		currentUserUserId={session?.user?.name}
		on:edit={handleEditRequest}
		on:delete={handleDeleteComment}
	/>
</div>
