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
    const response = await axios.post(' http://localhost:5000/signup', formdata); // assuming proxy is set
   console.log("your data is saved in DB",{ formdata })
   alert("user saved:" + response.data.email)
    return response.email;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
 };

  return (
    <>
   <input type="text" name="email" placeholder='enter your email here' defaultValue={formdata.email} onChange={changes}/>
   <input type="text" name="password" placeholder='enter your email here' defaultValue={formdata.password} onChange={changes}/>
   <button onClick={()=> submit() } >Submit</button>

    </>
  )
}


export default App 

