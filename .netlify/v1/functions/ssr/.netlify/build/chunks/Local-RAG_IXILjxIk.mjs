import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>This project demonstrates how to build a fully local Retrieval-Augmented Generation (RAG) system using powerful open-source tools. It leverages LangChain for orchestration, LangGraph for defining complex LLM workflows, HuggingFace Embeddings for document vectorization, Ollama for running local Large Language Models (LLMs), and ChromaDB as a local vector store. The system is served via a user-friendly chat interface built with Chainlit.</p>";

				const frontmatter = {"title":"Local RAG System","description":"A comprehensive, fully local RAG (Retrieval-Augmented Generation) system. Ingest knowledge from Excel files 📊, embed with HuggingFace 🤗, store in ChromaDB, and generate answers with Ollama's 🦙 local LLMs.","image":"/assets/images/projects/rag_system.png","pubDate":"2025-04-29T00:00:00.000Z","tags":["NLP","LLMs","RAG","Chatbot","Chainlit","HuggingFace","Ollama","ChromaDB"],"url":"https://github.com/imirghania/rag_langgraph","isPublished":true,"slug":"local-rag-system"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Local-RAG.md";
				const url = undefined;
				function rawContent() {
					return "\nThis project demonstrates how to build a fully local Retrieval-Augmented Generation (RAG) system using powerful open-source tools. It leverages LangChain for orchestration, LangGraph for defining complex LLM workflows, HuggingFace Embeddings for document vectorization, Ollama for running local Large Language Models (LLMs), and ChromaDB as a local vector store. The system is served via a user-friendly chat interface built with Chainlit.\n";
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
