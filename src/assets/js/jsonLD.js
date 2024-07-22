import { SITE_TITLE } from "@root/constants";
import { slugify } from "@root/utils";

export default function jsonLDGenerator({ type, post, url }) {
    if (type === "post") {
        return `<script type="application/ld+json">
                {
                "@context": "https://schema.org",
                "@type": "BlogPost",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "${url}"
                },
                "headline": "${post.data.title}",
                "description": "${post.data.description}",
                "image": "${post.data.image}",
                "author": {
                    "@type": "Person",
                    "name": "${slugify(post.data.author)}",
                    "url": "/about"
                },
                "datePublished": "${post.data.pubDate}"
                }
            </script>`;
        }
    return `<script type="application/ld+json">
        {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "${SITE_TITLE}",
        "url": "${import.meta.env.SITE}"
        }
    </script>`;
}
