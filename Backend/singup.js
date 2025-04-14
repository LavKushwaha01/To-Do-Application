import express, { json }  from 'express'
import cors from 'cors'
import { connectDB   } from './Database/connect.js'
import { User } from './Database/db.js'


const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

app.post('/singup', async (req, res) => {
    
    try {
        const { email , password } = req.body;
        const newUser = new User({ email , password });
        await newUser.save();
         res.status(201).json({ message: 'User saved', user: newUser });
         console.log("saved in database")
    } catch (err) {
        console.log("failed")
      res.status(500).json({ message: 'Error saving user', error: err });
    }
  });

  
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });