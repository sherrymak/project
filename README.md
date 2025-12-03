# Cash360

Cash360 is a MERN (MongoDB, Express, React, Node.js) web application for managing daily car cash remittances.

## Project Structure

cash360/
├─ frontend/ # React frontend
├─ backend/ # Express + MongoDB backend
├─ package.json
├─ package-lock.json
└─ README.md

## Features

- Add and manage drivers
- Track cars and payments
- RESTful API with Express and MongoDB
- Frontend built with React and Axios

## Requirements

- Node.js v18+  
- MongoDB (local or Atlas)  

## Setup Instructions

### Backend

1. Go to the backend folder:
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file with:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start backend:

bash
Copy code
npm run dev
Frontend
Go to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start frontend:

bash
Copy code
npm start
Open your browser at http://localhost:3000
```bash
cd backend
