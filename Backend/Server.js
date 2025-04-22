
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import profile from './Profile.js'

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
 app.use(express.json());
app.use(cors({ origin: 'https://to-do-application-three-xi.vercel.app', credentials: true }));



app.use('/' , SignIn);
app.use('/' , SignUp);
app.use('/profile' , profile);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'FrontEnd', 'TO-Do', 'dist'))); // adjust path if needed

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'FrontEnd', 'TO-Do', 'dist', 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log('Server is running on https://to-do-application-uyb6.onrender.com');
});
