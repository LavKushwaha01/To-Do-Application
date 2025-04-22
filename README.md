# ✅ Todo App

> Simple & Secure Task Tracker using **JWT** and **MongoDB**

## ✨ Features
- 🔐 **Email Login**
- 📝 **Add, Edit, Delete Todos**
- 📅 **Search Todos by Date**
- 📅 **Analyze your Daily performance**
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
1. **User Sign Up**
   **Users can SignUp by email(Real/New) and Set their password**

2. **User Sign In**
 **Users can SignIn with same email and password to generate a JWT token for authenticated access.**

3. **Task Management** 
  **Users can create, complete, delete, or update their tasks for the current day.**

4. **Date Filtering**
  **Use the built-in date picker to view tasks from any previous day.**

5. **Secure Routes**
  **All task routes are protected using JWT, ensuring that only authenticated users can access their data.**

6. **performance record**
   **Users can see their performance of Current Day**

## 📦 API Endpoints

## 🔐 Auth
- **POST /signin – Login with email, returns JWT token**

## ✅ Todos
- **GET / -  Users Home page (JWT required)** 

- **POST /Addtodo – Add new todo (JWT required)**

- **GET /todo/:date – Get todos by date (JWT required)**

- **PUT /updatetodo/:id – Update a todo**

- **DELETE /delete/:id – Delete a todo**  

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
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
 ``` 

4. **Run the app**
```bash
npm start
```

## 🤝 Contributing
**Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.**

## 📄 License
This project is open source and available under the [MIT License](LICENSE).


> Built with ❤️ By lav


