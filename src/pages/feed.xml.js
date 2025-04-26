import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('posts');
  return rss({
    title: 'El Baúl del Friki',
    // add `xmlns:media="http://search.yahoo.com/mrss/"`
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
    },
    description: 'El Baúl del Friki es tu espacio sobre coleccionismo e inversión más allá de activos tradicionales.',
    site: 'https://elbauldelfriki.com',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.slug}/`,
      customData: `<media:content
          type="image/${post.data.featuredImage.format == "jpg" ? "jpeg" : "png"}"
          width="${post.data.featuredImage.width}"
          height="${post.data.featuredImage.height}"
          medium="image"
          url="${"https://elbauldelfriki.com/" + post.data.featuredImage.src}" />
      `,
    })),
  });
}
