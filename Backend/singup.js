
import jwt from 'jsonwebtoken'
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs'; 
import { connectDB } from './Database/connect.js';
import { User } from './Database/db.js';
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
      return res.json({ message: 'Invalid email or password'  });
    }

    const token = jwt.sign({ id: user._id,  email: user.email },  process.env.SECRET_KEY);
    res.status(201).json({
    message: 'Sign in successful',
    token:token,
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
    const decoded = jwt.verify(token,  process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    res.json({ email: user.email });
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
