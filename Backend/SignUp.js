
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


// Sign Up Route
router.post('/', async (req, res) => {
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

export default router;