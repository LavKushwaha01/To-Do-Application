
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import profile from './Profile.js'

import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';

const app = express();
 app.use(express.json());
app.use(cors({ origin: 'https://to-do-application-three-xi.vercel.app', credentials: true }));




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/api/signin' , SignIn);
app.use('/api/signup' , SignUp);
app.use('/api/profile' , profile);


app.listen(process.env.PORT, () => {
  console.log('Server is running on https://to-do-application-uyb6.onrender.com');
});
