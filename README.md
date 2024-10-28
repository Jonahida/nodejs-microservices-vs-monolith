# Node.js Microservices vs Monolith

This repository features two applications built with Node.js and Express: one using a microservices architecture and the other a monolithic architecture. It aims to compare their performance through load testing and metrics analysis.

The project utilizes Docker Compose for container orchestration and includes Serverless functions for specific tasks. A dashboard is included to visualize results, helping to evaluate how each architecture manages scaling and responds to concurrent requests.

## Project Structure

- **api-gateway/**: Contains the API gateway for the microservices.
- **lista_tareas/**: The task management application.
- **local-serverless/**: Contains the serverless function handler.
- **servicio-notificaciones/**: Notification service implementation.
- **servicio-tareas/**: Task service implementation.
- **servicio-usuarios/**: User service implementation.
- **tarea-microservicio/**: Task microservice implementation.
- **task-service/**: Contains the task service models and routes.
- **nginx.conf**: Configuration file for Nginx.
- **docker-compose.yml**: Docker Compose configuration for deploying services.
- **test_services.sh**: Script for testing service performance.
- **doc/**: Contains the PDF guide "Monolítico vs Microservicios."

## Performance Evaluation

The project includes load testing and metrics analysis to evaluate the performance of each architecture, helping to understand how they manage scaling and respond to concurrent requests.

## Guide

For a detailed understanding of the concepts discussed, refer to the PDF guide included in the `doc/` directory.
