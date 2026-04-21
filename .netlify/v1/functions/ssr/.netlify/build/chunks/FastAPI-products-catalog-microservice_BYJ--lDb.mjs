import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>This project showcases the development of a products catalog microservice API for an e-commerce platform. Built with a focus on scalability and performance, the API leverages the following technologies:</p>\n<p>FastAPI: A high-performance web framework for building APIs in Python. FastAPI simplifies API development with features like automatic data validation, automatic documentation generation, and dependency injection.\nMongoDB: A NoSQL document database known for its flexibility and scalability. This project utilizes MongoDB to store product data due to its ability to handle diverse product structures and large datasets.\nBeanie ODM: An Object Document Mapper (ODM) library that simplifies working with MongoDB in Python. Beanie provides an intuitive way to interact with MongoDB collections by mapping Python classes to document structures.\nAPI Endpoints:</p>\n<p>The API provides a set of well-defined endpoints for managing product information within the e-commerce platform. Functionality may include:</p>\n<p>CRUD operations (Create, Read, Update, Delete) for product data.\nFiltering and searching products based on various criteria.\nPagination for retrieving large product datasets efficiently.\nTesting:</p>\n<p>The project prioritizes code quality and maintainability by employing PyTest, a popular Python testing framework. PyTest ensures the functionality of the API endpoints through comprehensive unit tests, guaranteeing reliable operation.</p>";

				const frontmatter = {"title":"FastAPI products-catalog microservice","description":"A products-catalog microservice for an e-commerce system.","image":"/assets/images/projects/product_catalog_api_service.png","pubDate":"2023-07-07T00:00:00.000Z","tags":["web-dev","FastAPI","e-commerce"],"url":"https://github.com/imirghania/FastAPI_e-commerce_product_catalog_service","isPublished":true,"slug":"products-catalog-microservice"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/FastAPI-products-catalog-microservice.md";
				const url = undefined;
				function rawContent() {
					return "\nThis project showcases the development of a products catalog microservice API for an e-commerce platform. Built with a focus on scalability and performance, the API leverages the following technologies:\n\nFastAPI: A high-performance web framework for building APIs in Python. FastAPI simplifies API development with features like automatic data validation, automatic documentation generation, and dependency injection.\nMongoDB: A NoSQL document database known for its flexibility and scalability. This project utilizes MongoDB to store product data due to its ability to handle diverse product structures and large datasets.\nBeanie ODM: An Object Document Mapper (ODM) library that simplifies working with MongoDB in Python. Beanie provides an intuitive way to interact with MongoDB collections by mapping Python classes to document structures.\nAPI Endpoints:\n\nThe API provides a set of well-defined endpoints for managing product information within the e-commerce platform. Functionality may include:\n\nCRUD operations (Create, Read, Update, Delete) for product data.\nFiltering and searching products based on various criteria.\nPagination for retrieving large product datasets efficiently.\nTesting:\n\nThe project prioritizes code quality and maintainability by employing PyTest, a popular Python testing framework. PyTest ensures the functionality of the API endpoints through comprehensive unit tests, guaranteeing reliable operation.\n";
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
