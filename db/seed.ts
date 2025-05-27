import { db, Comment } from "astro:db";

export default async function () {
	await db.insert(Comment).values([
		{
			postSlug: "bienvenido-blog-coleccionismo",
			userId: "John Doe",
			email: "johndoe@email.com",
			message: "Great post!",
			createdAt: new Date(),
		},
	]);
}
