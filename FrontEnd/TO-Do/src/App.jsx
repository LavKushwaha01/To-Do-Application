import { useState } from 'react';
import axios from 'axios';
import './App.css'
import '../..//../Backend/singup'

function App() {
 const [formdata, setformdata] = useState({email:'',password:''});

 const changes = function (props){
  setformdata({
    [props.target.name]: props.target.value,
  });
 };



 const callBackend = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post('http://localhost:5000/api/users',formdata);
  }
  catch(error) {
    console.error('Error saving data:', error);
  }
 }

  return (
    <>
    <form onClick={callBackend}>
   <input type="text" name="email" placeholder='enter your email here' value={formdata.email} onChange={changes}/>
   <input type="text" name="password" placeholder='enter your email here' value={formdata.password} onChange={changes}/>
   <button type='submit' >Submit</button>
   
   </form>
    </>
  )
}


export default App
