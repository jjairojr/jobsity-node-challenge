## Jobsity Node Challenge
Developed by [jjairojr](https://github.com/jjairojr)
  

This project was developed as part of the Jobsity Node Challenge. It aims to create two services that interact with each other, strictly following the challenge guidelines.

  

Link to the complete challenge instructions: [Node Challenge Instructions](https://git.jobsity.com/jobsity/node-challenge/-/wikis/Node-Challenge-Instructions)

  

## Implemented Features

  

-  [x] Registration Endpoint (Register)

-  [x] Stock  Endpoint (Stock)

-  [x] Endpoint to Retrieve User History

-  [x] Endpoint to List the Most-Requested Stocks, accessible only to Administrators

  

## Testshhh<LeftMouse>

  

To ensure code robustness and quality, comprehensive tests have been implemented:

  

-  [x] Unit Tests

-  [x] End-to-End Tests (E2E)

  

### How to run Tests

  

Just execute

  

```

npm run test:e2e

```

  

## Authentication

  

Authentication is essential to secure the routes. The system uses JWT (JSON Web Tokens) to authenticate users before granting access to protected features.

  

## Service Orchestration

  

To facilitate project deployment and execution, Docker and Docker Compose are used to orchestrate the services. This ensures consistent configuration across different environments.

  

## Documentation

  

API documentation is a crucial part of the project. Swagger was chosen to create detailed and interactive documentation. The documentation can be accessed at `/docs`.

  

## How to Run the Project

  

To run this project on your local machine, follow the steps below:

  

### Prerequisites

  

Before getting started, make sure you have the following tools installed on your machine:

  

-  [Docker](https://www.docker.com/get-started)

-  [Docker Compose](https://docs.docker.com/compose/install/)

  

### Steps to run on local machine

* Clone the project in your machine!
#### API-SERVICE
* Enter in api-service directory ```cd api-service```
* Create the ```.env``` files, we have two ```.env``` ```.env.production```
	```
	cp .env.example .env
	```
	```
	cp .env.production.example .env.production
	```
* Install the dependencies ```npm install```
* Execute the migrations with ```npx prisma migrate dev```
* Start the project ```npm run dev```

#### STOCK-SERVICE
* Enter in stock-service directory ```cd stock-service```
* Create the ```.env``` files, we have two ```.env``` ```.env.production```
	```
	cp .env.example .env
	```
	```
	cp .env.production.example .env.production
	```
* Install the dependencies ```npm install```
* Start the project ```npm run dev```

#### DATABASE
* Start database with this command
	 ```docker-compose -f docker-compose-dev.yml up --build -d```

### Steps to run in PRODUCTION
* Create .env.production files
* Just run ```docker-compose up --build```


## Dependencies
1.  ***Prisma:*** Prisma is a modern Node.js and TypeScript ORM (Object-Relational Mapping) that simplifies database interactions by allowing you to define data models in TypeScript code and automatically generating efficient SQL queries for your database.
    
2.   ***Fastify:*** Fastify is a high-performance web framework for Node.js, designed for building scalable APIs and web applications. It's known for its low resource consumption and native async/await support.
    
3.   ***Zod:*** Zod is a TypeScript library for data validation. It enables you to define typed data schemas for ensuring data integrity and type safety in your applications.
    
4.   ***Vitest:*** Vitest is a testing framework for Vue.js applications that simplifies the process of testing Vue components, making it easier to ensure the reliability and functionality of your Vue-based projects.
    
5.   ***Dotenv:*** Dotenv is a utility for loading environment variables from a `.env` file into your Node.js application. It's commonly used to manage configuration settings and secrets in a secure and organized way.
