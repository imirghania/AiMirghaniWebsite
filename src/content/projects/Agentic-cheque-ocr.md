---
title: Agentic Cheque OCR
description: A modular, LLM-powered pipeline for extracting structured data from bank cheque images using pluggable OCR engines and LLM backends via a LangGraph workflow.
image: /assets/images/projects/agentic_cheque_ocr.png
pubDate: 2026-04-06
tags:
  [
    "Computer Vision",
    "OCR",
    "LLM",
    "LangGraph",
    "Agentic AI",
    "Document AI",
    "FastAPI",
    "Python",
    "FinTech",
  ]
url: https://github.com/imirghania/agentic_cheque_ocr
isPublished: true
slug: agentic-cheque-ocr
---

A modular, LLM-powered pipeline for extracting structured data from bank cheque images. It combines pluggable OCR engines (EasyOCR, Tesseract) with pluggable LLM backends (OpenAI GPT-4o, Ollama, vLLM) orchestrated via a LangGraph workflow.

Given a cheque image and an optional natural-language prompt, the system extracts key fields — payee, amount, date, MICR code, account number, and more — and returns clean, validated JSON.

## Key Features

- **Agentic extraction** — understands document context, not just raw characters
- **Pluggable OCR layer** — swap between EasyOCR and Tesseract with a single flag
- **Pluggable LLM layer** — supports OpenAI, Ollama, and vLLM backends
- **Natural language prompts** — specify only the fields you need in plain English
- **Layout-agnostic** — no brittle regex or hardcoded field parsers
- **Multiple interfaces** — CLI, FastAPI microservice, Streamlit web app, and Python library
