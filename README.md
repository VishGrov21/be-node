# BE-Event-Shuffle

## Overview

**BE-Event-Shuffle** is built using **Node.js**, **Express**, and **MongoDB**, with **TypeScript** providing type safety.
This project aims to maintain a modular, scalable structure that separates concerns across various layers such as controllers, services, routers, and models.
A **Monolithic** architecture is used as its easy to maintain for simple backend service.

## Project Structure Philosophy

This project follows a layered architecture to ensure scalability and maintainability. Here's a breakdown of the project structure:

- **`src/constants`**: Holds constants that are used across the app, such as configurations or URLs.
- **`src/controller`**: Contains the logic for handling HTTP requests. It acts as the bridge between services and the outside world (HTTP layer).

- **`src/database`**: Responsible for setting up the database connection using **Mongoose**.

- **`src/exceptions`**: Custom error classes that are thrown throughout the application to handle exceptions in a structured way.

- **`src/models`**: Houses the Mongoose schema definitions that map to MongoDB collections.

- **`src/router`**: Defines all the application routes and ties them to their respective controllers.

- **`src/services`**: Contains the business logic of the application. The controllers call these services to perform database actions or any other kind of business process.

## Prerequisites

To run this project, you need to have the following installed:

- **Node.js (>= 16)**
- **Docker (for containerization)**
- **MongoDB** (if running outside of Docker)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/be-event-shuffle.git
cd be-event-shuffle
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Environment Variables

The environment variables are handled through Docker Compose. You can define them in the `docker-compose.yml` file, but make sure the following are set:

- **PORT**: The port on which the server runs. (Default: 3000)
- **MONGODB_URI**: MongoDB connection string.

## Running the Application

### 1. Run with Docker Compose

To build the Docker images and start the application along with MongoDB in a containerized environment, use the following command:

```bash
docker compose up --build
```

### 2. Run in Development Mode (without Docker)

If you prefer to run the application locally, follow these steps:

1. Ensure MongoDB is installed and running on your machine.
2. Set up a `.env` file (optional if you're running locally):
   - Create a `.env` file in the root directory of your project and configure the necessary environment variables.

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017
```

3. Start the development server:

```bash
npm run start:dev
```

## API Endpoints

### Event API

- **GET** `/api/v1/events/list`: List all events.
- **GET** `/api/v1/events/:id`: Get a single event by ID.
- **POST** `/api/v1/events`: Create a new event.
- **POST** `/api/v1/events/:id/vote`: Vote on an event.
- **GET** `/api/v1/events/:id/results`: Get event voting results.

### User API

- **GET** `/api/v1/users/list`: List all users.
- **GET** `/api/v1/users/:id`: Get a single user by ID.
- **POST** `/api/v1/users`: Create a new user.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing events, users, and votes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **TypeScript**: Superset of JavaScript providing type safety.
- **Docker**: Containerization for running the app and MongoDB.
- **PM2**: Process manager to keep the application running and manage the environment.
- **Helmet**: Middleware for securing Express apps.
- **Morgan**: HTTP request logger for monitoring the API.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
