import express, { json } from 'express';
import { mongoose } from 'mongoose';
import cors from 'cors';

mongoose.connect("mongodb+srv://lavkumar062:SxvMKIyMlAA5EyyU@cluster0.v4ibkbc.mongodb.net/Mern-Project" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
  
  const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', UserSchema);

const app = express();
app.use(express.json());
app.use(cors());


app.post('/signup', async (req, res) => {
    
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
  
  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });