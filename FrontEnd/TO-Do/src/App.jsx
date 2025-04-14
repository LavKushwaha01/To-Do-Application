import { useState } from 'react';
import axios from 'axios';
import './App.css'


function App() {
 const [formdata, setformdata] = useState({
  email:'',
  password:''
  });

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

 const changes = function (props){
  setformdata({
    ...formdata,
    [props.target.name]: props.target.value,
  });
 };

 async function submit(){
  try {
    const response = await axios.post(' http://localhost:3000/singup', formdata); 
    

    if (response.ok) {
      const data = await response.json();
      setMessage(data.message || "Saved successfully!");
      setSubmitted(true);
    } else {
      setMessage("Failed to save. Try again.");
    }
    return response.data;
  }

   catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
 };

  return (
    <>
      {!submitted ? (
   <form onSubmit= {()=> submit() }>
   <input type="text" name="email" placeholder='enter your email here' defaultValue={formdata.email} onChange={changes}/>
   <input type="text" name="password" placeholder='enter your email here' defaultValue={formdata.password} onChange={changes}/>
   <button type='submit' >Submit</button>
   </form>) : (
  <div className="text-green-600 text-lg font-semibold"> {message}</div>
)}
    </>

  );

}

export default App 

