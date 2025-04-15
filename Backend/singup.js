

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs'; 
import { connectDB } from './Database/connect.js';
import { User } from './Database/db.js';

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

    res.status(201).json({ message: "Congratulations! you'r now Signup ✅ ", user: newUser });
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
      return res.json({ message: '❌ Invalid email or password' });
    }

    res.status(201).json({ message: 'Sign in successful', user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ message: '🌐 Login failed' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
