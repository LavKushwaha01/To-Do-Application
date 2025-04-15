import express, { json }  from 'express'
import cors from 'cors'
import { connectDB   } from './Database/connect.js'
import { User } from './Database/db.js'

const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

app.post("/singin" , async function (req,res) {
    try{
    const { email, password } = req.body;
    const user = await User.findOne({ email ,password });
    if(user){
      req.json({
        message: "you are singin now"
      })
       }
    }
    catch (err) {
        res.status(500).json({ message: 'Login failed', error: err });
      }
})  

app.listen(4000);