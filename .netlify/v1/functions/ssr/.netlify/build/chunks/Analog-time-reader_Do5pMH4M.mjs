import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>A computer vision system that detects analog watches and recognizes their time using YOLOv11 for object detection and keypoint estimation. The project includes an MLOps pipeline using DVC for data versioning and experiment tracking.</p>";

				const frontmatter = {"title":"Analog time reader","description":"A computer vision system to automatically detect and interpret time from analog clock images using deep learning and is reproducible via an MLOps pipeline (DVC).","image":"/assets/images/projects/time_reader.png","pubDate":"2025-07-09T00:00:00.000Z","tags":["Computer Vision","OpenCV","YOLO","Label-studio","DVC"],"url":"https://github.com/imirghania/analog-time-reader","isPublished":true,"slug":"Analog-time-reader"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Analog-time-reader.md";
				const url = undefined;
				function rawContent() {
					return "\nA computer vision system that detects analog watches and recognizes their time using YOLOv11 for object detection and keypoint estimation. The project includes an MLOps pipeline using DVC for data versioning and experiment tracking.\n";
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
