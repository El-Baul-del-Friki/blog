import type { APIRoute } from "astro";
import { getAllPosts } from "../../utils/getAllPosts";

export const GET: APIRoute = async ({ url }) => {
	const skip = parseInt(url.searchParams.get("skip") || "0");
	const limit = parseInt(url.searchParams.get("limit") || "4");

	const allPosts = await getAllPosts();

	allPosts.sort(
		(a, b) =>
			new Date(b.frontmatter.date).getTime() -
			new Date(a.frontmatter.date).getTime()
	);

	const featuredPostsSlugs = allPosts
		.filter((post) => post.frontmatter.featured)
		.slice(0, 3)
		.map((post) => post.frontmatter.slug);

	const normalPosts = allPosts.filter(
		(post) =>
			!post.frontmatter.featured ||
			!featuredPostsSlugs.includes(post.frontmatter.slug)
	);

	const paginatedPosts = normalPosts.slice(skip, skip + limit);

	return new Response(
		JSON.stringify(
			paginatedPosts.map((post) => ({
				title: post.frontmatter.title,
				date: post.frontmatter.date,
				featuredImage: post.frontmatter.featuredImage,
				excerpt: post.frontmatter.excerpt,
				slug: post.frontmatter.slug,
				category: post.frontmatter.category || "general",
			}))
		),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
