
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import profile from './Profile.js'

import express from 'express';
import cors from 'cors';

const app = express();
 app.use(express.json());
app.use(cors({ origin: 'https://to-do-application-three-xi.vercel.app/', credentials: true }));



app.use('/' , SignIn);
app.use('/' , SignUp);
app.use('/profile' , profile);





app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
