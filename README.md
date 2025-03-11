# Social Network API

## Description

This project is a RESTful API for a social network web application built using Express.js, MongoDB, and Mongoose. It allows to create users, share thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API Routes](#api-routes)
* [Video Walkthrough](#video-walkthrough)
* [Technologies Used](#technologies-used)
* [License](#license)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your MongoDB connection string:

MONGODB_URI=<your_mongodb_connection_string>

## Usage

1. Start the server: `npm start`
2. Use a tool like Insomnia or Postman to test the API routes.

## API Routes

**Users:**

* **`GET /api/users`**: Get all users
* **`GET /api/users/:userId`**: Get a single user by ID
* **`POST /api/users`**: Create a new user
* **`PUT /api/users/:userId`**: Update a user
* **`DELETE /api/users/:userId`**: Delete a user

**Thoughts:**

* **`GET /api/thoughts`**: Get all thoughts
* **`GET /api/thoughts/:thoughtId`**: Get a single thought by ID
* **`POST /api/thoughts`**: Create a new thought
* **`PUT /api/thoughts/:thoughtId`**: Update a thought
* **`DELETE /api/thoughts/:thoughtId`**: Delete a thought

**Reactions:**

* **`POST /api/thoughts/:thoughtId/reactions`**: Create a reaction to a thought
* **`DELETE /api/thoughts/:thoughtId/reactions/:reactionId`**: Delete a reaction

**Friends:**

* **`POST /api/users/:userId/friends/:friendId`**: Add a friend to a user's friend list
* **`DELETE /api/users/:userId/friends/:friendId`**: Remove a friend from a user's friend list

## Video Walkthrough


https://github.com/user-attachments/assets/831b52e6-b9c1-416c-809b-b06cf31c5631



## Technologies Used

* Express.js
* MongoDB
* Mongoose

## License
