

import jwt from 'jsonwebtoken'
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { connectDB } from './Database/connect.js';
import { User, Todo } from './Database/db.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://to-do-application-three-xi.vercel.app', credentials: true }));

await connectDB();

const router = express.Router();



router.get('/', async (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('No token');

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    res.json({ email: user.email });
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});


// API route to add a new todo
router.post('/Addtodo', async (req, res) => {
  const { todo, date } = req.body;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const email = decoded.email;

  try {
    const newTodo = new Todo({
      todo,
      date,
      email,
      completed: false
    });
    await newTodo.save();
    res.status(201).send('Todo added successfully');
  } catch (err) {
    res.status(500).send('Error adding todo');
  }
});


// API route to get today's todos
router.get('/todo', async (req, res) => {
  const { date } = req.query;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const email = decoded.email;
  try {
    const todos = await Todo.find({ date ,email });
    res.json(todos);
  } catch (err) {
    res.status(500).send('Error fetching todos');
  }
});

// PATCH /profile/updatetodo/:id
router.patch('/updatetodo/:id', async (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;

  try {
    await Todo.findByIdAndUpdate(taskId, { completed });
    res.status(200).json({ message: 'Task updated' });
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
});


// delete functionality
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted", deleted: deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;