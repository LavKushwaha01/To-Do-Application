# ✅ Todo App

> Simple & Secure Task Tracker using **JWT** and **MongoDB**

## ✨ Features
- 🔐 **Email Login**
- 📝 **Add, Edit, Delete Todos**
- 📅 **Search Todos by Date**
- 🌙 **Dark Mode** (optional)


## 📦 Key Packages Used
- **express – Web framework**

- **mongoose – MongoDB ODM**

- **jsonwebtoken – JWT authentication**

- **bcryptjs – Password hashing**

- **dotenv – Manage env variables**

- **cors – Handle cross-origin requests**



## 🚀 Tech Stack
- **Frontend: React.js (with hooks and modern state management)**

- **Backend: Node.js + Express**

- **Database: MongoDB (with Mongoose)**

- **Auth: JSON Web Tokens (JWT)**


## 🧪 How It Works
1. **User Login**
 **Users can log in with their email to generate a JWT token for authenticated access.**

2. **Task Management** 
  **Users can create, complete, delete, or update their tasks for the current day.**

3. **Date Filtering**
  **Use the built-in date picker to view tasks from any previous day.**

4. **Secure Routes**
  **All task routes are protected using JWT, ensuring that only authenticated users can access their data.**


## 📦 API Endpoints

## 🔐 Auth
- **POST /api/auth/login – Login with email, returns JWT token**

## ✅ Todos
- **POST /api/todos – Add new todo (JWT required)**

- **GET /api/todos/:date – Get todos by date (JWT required)**

- **PUT /api/todos/:id – Update a todo**

- **DELETE /api/todos/:id – Delete a todo**  

## 🔧 Setup & Installation
1.  **Clone the Repo**
```bash
git clone https://github.com/LavKushwaha01/To-Do-Application.git
cd To-Do-Application
``` 

2. **Install dependencies**
```bash
npm install
``` 

3. **Set up environment variables Create a .env file in the root with the following:**
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
 ``` 

4. **Run the app**
```bash
npm start
```

## 🤝 Contributing
**Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.**

## 📄 License
**This project is open source and available under the MIT License.**


> Built with ❤️ By lav


