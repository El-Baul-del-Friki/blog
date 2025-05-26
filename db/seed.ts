import { db, Comment } from "astro:db";

export default async function () {
	await db.insert(Comment).values([
		{
			postSlug: "bienvenido-blog-coleccionismo",
			name: "Jamie",
			email: "jamie@turso.tech",
			message: "Great post!",
			createdAt: new Date(),
		},
	]);
}
