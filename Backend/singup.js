import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';

connect()

const app = express();
app.use(json());
app.use(cors());

app.post('/api/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ message: 'Error saving user', error: err });
    }
  });
  
  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });