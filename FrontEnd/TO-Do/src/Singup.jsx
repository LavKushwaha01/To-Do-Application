import React, { useState } from 'react';
import axios from 'axios';

function Singup() {
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
       const response = await axios.post(' http://localhost:3000/signup', formdata); 
         setMessage("Congaratulations you are now singup");
         setSubmitted(true);
         console.log(formdata)
     }
    
      catch (error) {
       console.error('Error saving user data:', error);
       throw error;
     }
    };
   
     return (
       <div>
         {!submitted ? (
      <form onSubmit={(e) => { e.preventDefault(); submit(); } }>
        <h2 style={{color: "black"}}>Signup</h2>
      <input type="email" name="email" placeholder='enter your email' value={formdata.email} onChange={changes} required/> <br />
      <input type="password" name="password" placeholder='enter your password' value={formdata.password} onChange={changes} required/> <br />
      <button type='submit' style={{margin:"10px"}} >Submit</button>
      </form>) : (
     <><h3>{message}</h3><a href="">click here to SignIn</a></>
   )}
       </div>
   
     );
   
   }
   
   export default Singup
   
   