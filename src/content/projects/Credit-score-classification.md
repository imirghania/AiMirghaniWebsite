---
title: Credit-score classification
description: An end-to-end ML project, from data cleaning to experimentations and models building.
image: /assets/images/projects/credit_score_classification.png
pubDate: 2023-07-07
tags:
  [
    "data-science",
    "FastAPI",
    "streamlit",
    "random-forest",
    "XGBoost",
    "LightGBM",
    "Mlflow",
    "Dagshub",
    "Shap",
  ]
featured: true
url: https://github.com/imirghania/Credit_Classification_project
slug: Credit-score-classification
---

This project demonstrates a comprehensive approach to credit score classification using machine learning. The project encompasses all stages, from data exploration to model deployment.

Data Exploration & Cleaning:

The project begins with a thorough Exploratory Data Analysis (EDA) on a credit score dataset acquired from Kaggle.
Recognizing the importance of data quality, a meticulous cleaning process was implemented. This involved handling missing values, outliers, and inconsistencies within the dataset.
To ensure maintainability and reusability, an Object-Oriented Programming (OOP) approach was adopted to structure the data cleaning pipeline.
Model Development & Experimentation:

The project explored various machine learning models for credit score prediction, including Random Forest, XGBoost, and LightGBM. These models were chosen due to their effectiveness in handling complex and potentially imbalanced datasets commonly seen in credit scoring problems.
Experimentation played a crucial role in identifying the best performing model. This involved tracking experiments using tools like MLflow and Datashaub, allowing for efficient comparison and analysis.
Hyperparameter Tuning with SHAP:

To optimize the chosen model's performance, hyperparameter tuning was conducted using the SHAP library. SHAP facilitates Bayesian optimization, which efficiently explores the hyperparameter space and identifies the optimal configuration for maximizing model accuracy.
Web Application Deployment:

The final stage involved deploying the chosen model as a web application. FastAPI was utilized as the backend framework to serve API endpoints for credit score predictions. Streamlit provided the user interface, enabling users to interact with the model and receive credit score predictions.
