
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
app.use(cors());

await connectDB();

// Sign Up Route
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.json({ message: '⚠️ already Signup' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup sucessfully ✅ ", user: newUser });
  } catch (err) {
    console.log("Signup failed:", err);
    res.json({ message: 'Error saving user', error: err });
  }
});

// Sign In Route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "🚫 you'r not Signup yet" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);
    res.status(201).json({
      message: 'Sign in successful',
      token: token,
      user: { email: user.email }
    });

    //  res.status(201).json({ message: 'Sign in successful', user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ message: '🌐 Login failed' });
  }
});



app.get('/profile', async (req, res) => {
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
app.post('/profile/Addtodo', async (req, res) => {
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
app.get('/profile/todo', async (req, res) => {
  const { date } = req.query;
  try {
    const todos = await Todo.find({ date });
    res.json(todos);
  } catch (err) {
    res.status(500).send('Error fetching todos');
  }
});

// PATCH /profile/updatetodo/:id
app.patch('/profile/updatetodo/:id', async (req, res) => {
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


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
