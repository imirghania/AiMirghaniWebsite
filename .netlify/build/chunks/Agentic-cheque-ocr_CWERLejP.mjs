import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>A modular, LLM-powered pipeline for extracting structured data from bank cheque images. It combines pluggable OCR engines (EasyOCR, Tesseract) with pluggable LLM backends (OpenAI GPT-4o, Ollama, vLLM) orchestrated via a LangGraph workflow.</p>\n<p>Given a cheque image and an optional natural-language prompt, the system extracts key fields — payee, amount, date, MICR code, account number, and more — and returns clean, validated JSON.</p>\n<h2 id=\"key-features\" class=\"scroll-mt-6 no-underline\"><a class=\"anchor scroll-mt-9\" href=\"#key-features\">Key Features<i class=\"fas fa-link\"></i></a></h2>\n<ul>\n<li><strong>Agentic extraction</strong> — understands document context, not just raw characters</li>\n<li><strong>Pluggable OCR layer</strong> — swap between EasyOCR and Tesseract with a single flag</li>\n<li><strong>Pluggable LLM layer</strong> — supports OpenAI, Ollama, and vLLM backends</li>\n<li><strong>Natural language prompts</strong> — specify only the fields you need in plain English</li>\n<li><strong>Layout-agnostic</strong> — no brittle regex or hardcoded field parsers</li>\n<li><strong>Multiple interfaces</strong> — CLI, FastAPI microservice, Streamlit web app, and Python library</li>\n</ul>";

				const frontmatter = {"title":"Agentic Cheque OCR","description":"A modular, LLM-powered pipeline for extracting structured data from bank cheque images using pluggable OCR engines and LLM backends via a LangGraph workflow.","image":"/assets/images/projects/agentic_cheque_ocr.png","pubDate":"2026-04-06T00:00:00.000Z","tags":["Computer Vision","OCR","LLM","LangGraph","Agentic AI","Document AI","FastAPI","Python","FinTech"],"url":"https://github.com/imirghania/agentic_cheque_ocr","isPublished":true,"slug":"agentic-cheque-ocr"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Agentic-cheque-ocr.md";
				const url = undefined;
				function rawContent() {
					return "\nA modular, LLM-powered pipeline for extracting structured data from bank cheque images. It combines pluggable OCR engines (EasyOCR, Tesseract) with pluggable LLM backends (OpenAI GPT-4o, Ollama, vLLM) orchestrated via a LangGraph workflow.\n\nGiven a cheque image and an optional natural-language prompt, the system extracts key fields — payee, amount, date, MICR code, account number, and more — and returns clean, validated JSON.\n\n## Key Features\n\n- **Agentic extraction** — understands document context, not just raw characters\n- **Pluggable OCR layer** — swap between EasyOCR and Tesseract with a single flag\n- **Pluggable LLM layer** — supports OpenAI, Ollama, and vLLM backends\n- **Natural language prompts** — specify only the fields you need in plain English\n- **Layout-agnostic** — no brittle regex or hardcoded field parsers\n- **Multiple interfaces** — CLI, FastAPI microservice, Streamlit web app, and Python library\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"key-features","text":"Key Features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
