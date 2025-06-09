interface Frontmatter {
	title: string;
	date: string;
	featuredImage: {
		src: string;
		width?: number;
		height?: number;
		format?: string;
	};
	excerpt: string;
	slug: string;
	featured: boolean;
	category: string;
}

export async function getAllPosts(): Promise<{ frontmatter: Frontmatter }[]> {
	// Importa dinámicamente usando import.meta.glob
	const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
		"../content/posts/*.mdx",
		{
			eager: true,
		}
	);

	return Object.values(modules).map((mod) => ({
		frontmatter: mod.frontmatter,
	}));
}
