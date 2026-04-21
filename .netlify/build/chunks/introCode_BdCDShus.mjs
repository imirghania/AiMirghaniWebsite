/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<figure data-rehype-pretty-code-figure=\"\"><pre style=\"background-color:#282A36;color:#F8F8F2\" tabindex=\"0\" data-language=\"python\" data-theme=\"dracula\"><code data-line-numbers=\"\" data-language=\"python\" data-theme=\"dracula\" style=\"display: grid;\" data-line-numbers-max-digits=\"2\"><span data-line=\"\"><span style=\"color:#FF79C6\">from</span><span style=\"color:#F8F8F2\"> dataclasses </span><span style=\"color:#FF79C6\">import</span><span style=\"color:#F8F8F2\"> ( dataclass,</span></span>\n<span data-line=\"\"><span style=\"color:#F8F8F2\">                          field )</span></span>\n<span data-line=\"\"> </span>\n<span data-line=\"\"><span style=\"color:#50FA7B\">@dataclass</span></span>\n<span data-line=\"\"><span style=\"color:#FF79C6\">class</span><span style=\"color:#8BE9FD\"> AiEngineer</span><span style=\"color:#F8F8F2\">:</span></span>\n<span class=\"line--highlighted\" data-line=\"\" data-highlighted-line=\"\"><span style=\"color:#F8F8F2\">    name: </span><span style=\"color:#8BE9FD;font-style:italic\">str</span><span style=\"color:#FF79C6\"> =</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Ahmed Mirghani</span><span style=\"color:#E9F284\">\"</span></span>\n<span data-line=\"\"><span style=\"color:#F8F8F2\">    </span><mark data-highlighted-chars=\"\" data-chars-id=\"word\"><span style=\"color:#F8F8F2\">skills</span></mark><span style=\"color:#F8F8F2\">: list[</span><span style=\"color:#8BE9FD;font-style:italic\">str</span><span style=\"color:#F8F8F2\">] </span><span style=\"color:#FF79C6\">=</span><span style=\"color:#F8F8F2\"> field(</span></span>\n<span data-line=\"\"><span style=\"color:#FFB86C;font-style:italic\">        default_factory</span><span style=\"color:#FF79C6\">=</span><span style=\"color:#F8F8F2\">(</span></span>\n<span data-line=\"\"><span style=\"color:#FF79C6\">            lambda</span><span style=\"color:#F8F8F2\">: [</span></span>\n<span class=\"line--highlighted\" data-line=\"\" data-highlighted-line=\"\"><span style=\"color:#E9F284\">            \"</span><span style=\"color:#F1FA8C\">Data Analysis</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line--highlighted\" data-line=\"\" data-highlighted-line=\"\"><span style=\"color:#E9F284\">            \"</span><span style=\"color:#F1FA8C\">Computer Vision</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line--highlighted\" data-line=\"\" data-highlighted-line=\"\"><span style=\"color:#E9F284\">            \"</span><span style=\"color:#F1FA8C\">Agentic workflows</span><span style=\"color:#E9F284\">\"</span></span>\n<span data-line=\"\"><span style=\"color:#F8F8F2\">            ])</span></span>\n<span data-line=\"\"><span style=\"color:#F8F8F2\">        )</span></span></code></pre></figure>";

				const frontmatter = {};
				const file = "/home/ubuntu_wsl/main-blog/src/pages/texts/introCode.md";
				const url = "/texts/introCode";
				function rawContent() {
					return "```python {6,10-12} showLineNumbers /skills/#word\nfrom dataclasses import ( dataclass,\n                          field )\n\n@dataclass\nclass AiEngineer:\n    name: str = \"Ahmed Mirghani\"\n    skills: list[str] = field(\n        default_factory=(\n            lambda: [\n            \"Data Analysis\",\n            \"Computer Vision\",\n            \"Agentic workflows\"\n            ])\n        )\n```\n";
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
