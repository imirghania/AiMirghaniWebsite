const id = "Agentic-cheque-ocr.md";
						const collection = "projects";
						const slug = "agentic-cheque-ocr";
						const body = "\nA modular, LLM-powered pipeline for extracting structured data from bank cheque images. It combines pluggable OCR engines (EasyOCR, Tesseract) with pluggable LLM backends (OpenAI GPT-4o, Ollama, vLLM) orchestrated via a LangGraph workflow.\n\nGiven a cheque image and an optional natural-language prompt, the system extracts key fields — payee, amount, date, MICR code, account number, and more — and returns clean, validated JSON.\n\n## Key Features\n\n- **Agentic extraction** — understands document context, not just raw characters\n- **Pluggable OCR layer** — swap between EasyOCR and Tesseract with a single flag\n- **Pluggable LLM layer** — supports OpenAI, Ollama, and vLLM backends\n- **Natural language prompts** — specify only the fields you need in plain English\n- **Layout-agnostic** — no brittle regex or hardcoded field parsers\n- **Multiple interfaces** — CLI, FastAPI microservice, Streamlit web app, and Python library\n";
						const data = {title:"Agentic Cheque OCR",description:"A modular, LLM-powered pipeline for extracting structured data from bank cheque images using pluggable OCR engines and LLM backends via a LangGraph workflow.",pubDate:new Date(1775433600000),image:"/assets/images/projects/agentic_cheque_ocr.png",url:"https://github.com/imirghania/agentic_cheque_ocr",tags:["Computer Vision","OCR","LLM","LangGraph","Agentic AI","Document AI","FastAPI","Python","FinTech"],isPublished:true};
						const _internal = {
							type: 'content',
							filePath: "/home/ubuntu_wsl/main-blog/src/content/projects/Agentic-cheque-ocr.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
