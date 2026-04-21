import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_kHAT7z-Z.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
    const blog = await getCollection("blog");

    return rss({
        title: "AiMirghani’s Blog",
        description:
        "A Personal website that meant for sharing thoughts and knowledge.",
        site: context.site,
        trailingSlash: false,
        items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        customData: post.data.customData,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/blog/${post.slug}/`,
        stylesheet: "/rss/styles.xsl",
        })),
    });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
