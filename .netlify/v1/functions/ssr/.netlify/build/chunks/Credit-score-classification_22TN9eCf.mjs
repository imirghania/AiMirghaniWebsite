import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA_5307C.mjs';

const html = "<p>This project demonstrates a comprehensive approach to credit score classification using machine learning. The project encompasses all stages, from data exploration to model deployment.</p>\n<p>Data Exploration &#x26; Cleaning:</p>\n<p>The project begins with a thorough Exploratory Data Analysis (EDA) on a credit score dataset acquired from Kaggle.\nRecognizing the importance of data quality, a meticulous cleaning process was implemented. This involved handling missing values, outliers, and inconsistencies within the dataset.\nTo ensure maintainability and reusability, an Object-Oriented Programming (OOP) approach was adopted to structure the data cleaning pipeline.\nModel Development &#x26; Experimentation:</p>\n<p>The project explored various machine learning models for credit score prediction, including Random Forest, XGBoost, and LightGBM. These models were chosen due to their effectiveness in handling complex and potentially imbalanced datasets commonly seen in credit scoring problems.\nExperimentation played a crucial role in identifying the best performing model. This involved tracking experiments using tools like MLflow and Datashaub, allowing for efficient comparison and analysis.\nHyperparameter Tuning with SHAP:</p>\n<p>To optimize the chosen model’s performance, hyperparameter tuning was conducted using the SHAP library. SHAP facilitates Bayesian optimization, which efficiently explores the hyperparameter space and identifies the optimal configuration for maximizing model accuracy.\nWeb Application Deployment:</p>\n<p>The final stage involved deploying the chosen model as a web application. FastAPI was utilized as the backend framework to serve API endpoints for credit score predictions. Streamlit provided the user interface, enabling users to interact with the model and receive credit score predictions.</p>";

				const frontmatter = {"title":"Credit-score classification","description":"An end-to-end ML project, from data cleaning to experimentations and models building.","image":"/assets/images/projects/credit_score_classification.png","pubDate":"2023-07-07T00:00:00.000Z","tags":["data-science","FastAPI","streamlit","random-forest","XGBoost","LightGBM","Mlflow","Dagshub","Shap"],"url":"https://github.com/imirghania/Credit_Classification_project","isPublished":true,"slug":"Credit-score-classification"};
				const file = "/home/ubuntu_wsl/main-blog/src/content/projects/Credit-score-classification.md";
				const url = undefined;
				function rawContent() {
					return "\nThis project demonstrates a comprehensive approach to credit score classification using machine learning. The project encompasses all stages, from data exploration to model deployment.\n\nData Exploration & Cleaning:\n\nThe project begins with a thorough Exploratory Data Analysis (EDA) on a credit score dataset acquired from Kaggle.\nRecognizing the importance of data quality, a meticulous cleaning process was implemented. This involved handling missing values, outliers, and inconsistencies within the dataset.\nTo ensure maintainability and reusability, an Object-Oriented Programming (OOP) approach was adopted to structure the data cleaning pipeline.\nModel Development & Experimentation:\n\nThe project explored various machine learning models for credit score prediction, including Random Forest, XGBoost, and LightGBM. These models were chosen due to their effectiveness in handling complex and potentially imbalanced datasets commonly seen in credit scoring problems.\nExperimentation played a crucial role in identifying the best performing model. This involved tracking experiments using tools like MLflow and Datashaub, allowing for efficient comparison and analysis.\nHyperparameter Tuning with SHAP:\n\nTo optimize the chosen model's performance, hyperparameter tuning was conducted using the SHAP library. SHAP facilitates Bayesian optimization, which efficiently explores the hyperparameter space and identifies the optimal configuration for maximizing model accuracy.\nWeb Application Deployment:\n\nThe final stage involved deploying the chosen model as a web application. FastAPI was utilized as the backend framework to serve API endpoints for credit score predictions. Streamlit provided the user interface, enabling users to interact with the model and receive credit score predictions.\n";
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
