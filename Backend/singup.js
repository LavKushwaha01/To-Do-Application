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
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'User already exists' });

       else{
        const newUser = new User({ email , password });
        await newUser.save();
         res.status(201).json({ message: 'User saved', user: newUser });
         console.log("saved in database")
       }
    } catch (err) {
        console.log("failed")
      res.status(500).json({ message: 'Error saving user', error: err });
    }
  });



  app.post("/singin" , async function (req,res) {
      try{
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: 'Invalid email or password' });
      else{
        res.json({
          message: "singin sucessful"
        })
      }
      }
      catch (err) {
          res.status(500).json({ message: 'Login failed', error: err });
        }
  })  

  
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });