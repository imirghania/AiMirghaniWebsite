import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "";

				const frontmatter = {"title":"Visdrone Detector Flask App","description":"A web application that serves a YOLOv8 object detection model trained on Visdron2019 data.","image":"/assets/images/projects/visdrone-detector-flask-app.png","pubDate":"2024-07-25T00:00:00.000Z","tags":["data-science","Flask","HTMX","Computer-vision","YOLO","PyTorch"],"url":"https://github.com/imirghania/VisDrone_Detector_Flask_APP","isPublished":true,"slug":"visdrone-detector-flask-app"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Visdrone-detector-Flask-app.md";
				const url = undefined;
				function rawContent() {
					return "";
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
