import { useState } from 'react';
import axios from 'axios';
import './App.css'


function App() {
 const [formdata, setformdata] = useState({
  email:'',
  password:''
  });

 const changes = function (props){
  setformdata({
    ...formdata,
    [props.target.name]: props.target.value,
  });
 };

 async function submit(){
  try {
    const response = await axios.post(' http://localhost:3000/singup', formdata); 
    return response.data;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
 };

  return (
    <>
   <form onSubmit= {()=> submit() }>
   <input type="text" name="email" placeholder='enter your email here' defaultValue={formdata.email} onChange={changes}/>
   <input type="text" name="password" placeholder='enter your email here' defaultValue={formdata.password} onChange={changes}/>
   <button type='submit' >Submit</button>
   </form>
    </>
  );

}

export default App 

