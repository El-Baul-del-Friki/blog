// src/pages/api/comments.ts (¡Nuevo archivo!)
export const prerender = false; // Asegúrate de que no se prerenderice

import type { APIRoute } from "astro";
import { db, Comment } from "astro:db";
import { eq } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
	// Usamos POST porque así lo estás llamando
	try {
		const data = await request.json(); // Esperamos un cuerpo JSON
		const postSlug = data.postSlug;

		if (!postSlug) {
			return new Response(
				JSON.stringify({ error: "postSlug is required" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const comments = await db
			.select()
			.from(Comment)
			.where(eq(Comment.postSlug, postSlug))
			.orderBy(Comment.createdAt, "desc");

		return new Response(JSON.stringify(comments), {
			// <-- Retorna JSON explícitamente
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error: any) {
		console.error("Error fetching comments:", error);
		return new Response(
			JSON.stringify({
				error: "Failed to fetch comments",
				details: error.message,
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
};
