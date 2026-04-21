import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<h2 id=\"in-progress\" class=\"scroll-mt-6 no-underline\"><a class=\"anchor scroll-mt-9\" href=\"#in-progress\">In Progress<i class=\"fas fa-link\"></i></a></h2>";

				const frontmatter = {"title":"Object Detctors from DPM to Neural Networks","description":"Embark on a nostalgic journey exploring the charm of vintage tech and its unexpected resurgence among modern developers and designers.","author":"Ahmed Mirghani","image":"/assets/images/posts/vintage-tech-01.jpg","pubDate":"2023-07-27T00:00:00.000Z","tags":["UI","frontend","UX","design"],"isPublished":false,"slug":"Object-detctors-from-dpm-to-neural-networks"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/blog/Object-detctors-from-dpm-to-neural-networks.md";
				const url = undefined;
				function rawContent() {
					return "\n## In Progress\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"in-progress","text":"In Progress"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
