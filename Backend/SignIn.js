
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
app.use(cors({ origin: 'https://to-do-application-three-xi.vercel.app', credentials: true }));

await connectDB();



const router = express.Router();


router.post('/signin', async (req, res) => {
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

export default router;