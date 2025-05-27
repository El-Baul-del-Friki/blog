// src/actions/index.ts (añadiendo una nueva acción)
import { defineAction } from "astro:actions";
import { z } from "astro/zod"; // Asegúrate de que es astro/zod
import { db, Comment } from "astro:db";
import { getSession } from "auth-astro/server"; // Para obtener la sesión
import { eq } from "astro:db"; // Para usar 'where' en la actualización

export const server = {
	addComment: defineAction({
		accept: "form",
		input: z.object({
			postSlug: z.string(),
			userId: z.string(),
			email: z.string(),
			message: z.string().min(1, "Comment cannot be empty"),
		}),
		handler: async ({ postSlug, message, userId, email }, { request }) => {
			// Opcional: Re-validar si el usuario está logueado, aunque el frontend ya oculte el formulario
			const session = await getSession(request);
			if (
				!session ||
				!session.user ||
				session.user.name !== userId ||
				session.user.email !== email
			) {
				throw new Error("Unauthorized: User data mismatch.");
			}

			const comment = await db
				.insert(Comment)
				.values({
					postSlug,
					userId, // Nombre del usuario
					email,
					message,
					createdAt: new Date(),
				})
				.returning();

			return comment[0];
		},
	}),

	// ¡NUEVA ACCIÓN PARA ACTUALIZAR!
	updateComment: defineAction({
		accept: "form",
		input: z.object({
			id: z.coerce.number(), // El ID del comentario a actualizar (z.coerce.number() para convertir de string a number)
			postSlug: z.string(), // Mantener postSlug para consistencia
			message: z.string().min(1, "Comment cannot be empty"),
		}),
		handler: async ({ id, postSlug, message }, { request }) => {
			const session = await getSession(request);

			if (!session || !session.user) {
				throw new Error("Unauthorized: You must be logged in.");
			}

			// 1. Verificar si el comentario existe y si el usuario logueado es el autor
			const existingComment = await db
				.select()
				.from(Comment)
				.where(eq(Comment.id, id))
				.limit(1);

			if (
				!existingComment ||
				existingComment.length === 0 ||
				existingComment[0].userId !== session.user.name || // Compara con el nombre del usuario
				existingComment[0].email !== session.user.email
			) {
				throw new Error(
					"Unauthorized: You are not the author of this comment."
				);
			}

			// 2. Actualizar el comentario
			const updatedComment = await db
				.update(Comment)
				.set({
					message: message,
					// No actualizamos userId, email ni createdAt al editar
				})
				.where(eq(Comment.id, id))
				.returning(); // Retorna el comentario actualizado

			return updatedComment[0];
		},
	}),

	deleteComment: defineAction({
		accept: "json", // Aceptará el ID del comentario como JSON
		input: z.object({
			id: z.coerce.number(), // El ID del comentario a eliminar
		}),
		handler: async ({ id }, { request }) => {
			// context te da acceso a Astro.locals, etc.
			// Opcional pero recomendado: Verificación de autorización en el servidor
			const session = await getSession(request); // Si tienes sesión en Astro.locals
			const userEmail = session?.user?.email; // Email del usuario logueado
			const userId = session?.user?.name; // ID/nombre del usuario logueado (como lo uses)

			if (!userEmail || !userId) {
				throw new Error("Unauthorized: User not logged in.");
			}

			// 1. Encuentra el comentario para verificar la autoría
			const commentToDelete = await db
				.select()
				.from(Comment)
				.where(eq(Comment.id, id))
				.limit(1); // Limita a 1 resultado

			if (commentToDelete.length === 0) {
				throw new Error("Comment not found.");
			}

			const comment = commentToDelete[0];

			// 2. Verifica si el usuario logueado es el autor del comentario
			if (comment.email !== userEmail || comment.userId !== userId) {
				throw new Error(
					"Unauthorized: You can only delete your own comments."
				);
			}

			// 3. Elimina el comentario de la base de datos
			await db.delete(Comment).where(eq(Comment.id, id));

			return { success: true }; // No necesitas devolver nada, pero es bueno indicar éxito
		},
	}),
};
