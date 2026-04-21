import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<h2 id=\"in-progress\" class=\"scroll-mt-6 no-underline\"><a class=\"anchor scroll-mt-9\" href=\"#in-progress\">In Progress<i class=\"fas fa-link\"></i></a></h2>";

				const frontmatter = {"title":"How to Perform Hypothesis Testing in Python using SciPy","description":"Delve into the art of minimalist coding, where simplicity reigns supreme, leading to clearer, more efficient, and aesthetically pleasing code.","author":"Ahmed Mirghani","image":"/assets/images/posts/hypothesis-testing.png","imageSrc":"https://link.springer.com/chapter/10.1007/978-3-030-76857-7_14","pubDate":"2023-08-03T00:00:00.000Z","tags":["Minialism","design","code-style"],"isPublished":false,"slug":"how-to-perform-hypothesis-testing-in-python"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/blog/how-to-perform-hypothesis-testing-in-python.md";
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
