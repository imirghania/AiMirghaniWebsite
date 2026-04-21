/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>I’m Ahmed Mirghani, a Data Scientist and Python developer specializing in building end-to-end data solutions, from initial data acquisition and wrangling to model development and deployment.</p>\n<p>My foundation in mathematics sparked a deep interest in the principles of intelligent systems, which I advanced through a Master’s degree in Machine Learning and Data Analysis. I complement my core data science expertise with full-stack development skills, allowing me to build robust APIs and user-friendly interfaces that bring models into production.</p>\n<p>Beyond my technical pursuits, I am a dedicated father whose hobbies—from reading and drawing to sports—reinforce the values of patience, creativity, and continuous learning.</p>\n<p>This blog is my platform for sharing practical, code-forward guides that bridge the gap between theoretical concepts and real-world application. I invite you to explore these insights as we uncover the potential of data together.</p>";

				const frontmatter = {};
				const file = "/home/ubuntu_wsl/main-blog/src/pages/texts/aboutMe.md";
				const url = "/texts/aboutMe";
				function rawContent() {
					return "\nI'm Ahmed Mirghani, a Data Scientist and Python developer specializing in building end-to-end data solutions, from initial data acquisition and wrangling to model development and deployment.\n\nMy foundation in mathematics sparked a deep interest in the principles of intelligent systems, which I advanced through a Master’s degree in Machine Learning and Data Analysis. I complement my core data science expertise with full-stack development skills, allowing me to build robust APIs and user-friendly interfaces that bring models into production.\n\nBeyond my technical pursuits, I am a dedicated father whose hobbies—from reading and drawing to sports—reinforce the values of patience, creativity, and continuous learning.\n\nThis blog is my platform for sharing practical, code-forward guides that bridge the gap between theoretical concepts and real-world application. I invite you to explore these insights as we uncover the potential of data together.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content as C, _page as _ };
