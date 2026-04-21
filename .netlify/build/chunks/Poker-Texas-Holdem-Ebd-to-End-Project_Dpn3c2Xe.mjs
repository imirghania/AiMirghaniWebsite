import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>This project utilizes the IRC Poker dataset to analyze Poker hands from Holdem3 game files. It includes steps for data extraction, preparation, analysis, and building a predictive model.</p>";

				const frontmatter = {"title":"Texas Holdem Poker Game Analysis End to End project","description":"An End-to-End Poker game analysis project starts from EDA and ends with Folding classifier.","image":"/assets/images/projects/poker_project.jpg","pubDate":"2024-12-18T00:00:00.000Z","tags":["data-science","LightGBM","Pandas"],"url":"https://github.com/imirghania/PokerProject","isPublished":true,"slug":"texas-holdem-end-to-end-project"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Poker-Texas-Holdem-Ebd-to-End-Project.md";
				const url = undefined;
				function rawContent() {
					return "\nThis project utilizes the IRC Poker dataset to analyze Poker hands from Holdem3 game files. It includes steps for data extraction, preparation, analysis, and building a predictive model.\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
