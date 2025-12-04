# Snippet API

A simple REST API built with Node.js, Express, and MongoDB.  
This project allows users to store, edit, retrieve, and delete code snippets.  

This project was created for the Web Development course (Project 2).

---

## 🚀 Live API

https://project2-4-tih3.onrender.com/


---

## 📦 Features
- Full CRUD functionality (Create, Read, Update, Delete)
- MongoDB database using Mongoose
- Supports filtering (e.g. /api/getall?lang=js)
- Supports limit parameter (e.g. /api/getall?limit=5)

---

## 🔧 How to Run the Project Locally

### Windows
1. Open PowerShell
2. Clone repository:
   git clone https://github.com/Hannapentti1/Project2
3. Go into project folder:
   cd project2
4. Install dependencies:
   npm install
5. Create a `.env` file:
   MONGODB_URI=your-mongodb-url (includes password)
6. Run server:
   npm start
7. API runs at:
   http://localhost:5000

## 🧠 Reflection

This project helped me understand how to build a complete backend API using Node.js, Express, and MongoDB. One of the biggest challenges was connecting MongoDB Atlas to my deployed project on Render. I learned how environment variables work, how to use .env, and why database credentials should never be committed publicly. Fixing deployment errors also taught me to use logs and troubleshoot issues step-by-step.

I also gained confidence using tools like Postman to test API routes. Creating POST, GET, PATCH, and DELETE requests helped me understand how HTTP methods are used in real applications. After finishing the CRUD functionality, I practiced filtering, limits, and proper response formats. This made my API more flexible and realistic.

Overall, this project improved my problem-solving skills, gave me practical backend experience, and showed me how full-stack development pieces connect together. I still need to practice with writing readme.md files because sometimes I struggle with the formatting.
