Task Manager Backend

This project is a backend server for managing tasks. It allows users to register, log in, and perform operations related to task management. The backend is built using Node.js, Express.js, and MongoDB.

Features

User registration and login
Authentication using JSON Web Tokens (JWT)
Create, update, delete, and get tasks
Secure routes for authenticated users only
Clean and organized code structure
Technologies Used
Node.js – JavaScript runtime for server-side development
Express.js – Web framework for building RESTful APIs
MongoDB – NoSQL database for storing users and tasks
Mongoose – MongoDB object modeling tool
JWT (JSON Web Tokens) – For user authentication
bcrypt – For password hashing
Getting Started
Prerequisites
To run this project, you need to have the following installed:

Node.js
npm (Node package manager)
MongoDB (You can use MongoDB Atlas or install it locally)
Installation Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/dnyaneshwar-gitte/backend-task-manager.git
Navigate to the project folder:

bash
Copy
Edit
cd backend-task-manager
Install the dependencies:

nginx
Copy
Edit
npm install
Create a file named .env and add the following environment variables:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the server:

sql
Copy
Edit
npm start
The server will start and listen on the specified port (default is 5000).

API Endpoints
Authentication Routes
POST /api/auth/register – Register a new user
POST /api/auth/login – Login and receive a token
Task Routes (Require Authentication)
GET /api/tasks – Get all tasks for the logged-in user
POST /api/tasks – Create a new task
PUT /api/tasks/:id – Update a task
DELETE /api/tasks/:id – Delete a task
Folder Structure
models/ – Contains MongoDB models
routes/ – Contains route definitions
controllers/ – Handles request logic (if added)
server.js – Entry point for the application
Contribution
If you want to contribute, feel free to fork the repository and create a pull request with your improvements.

License
This project is open source and free to use.
