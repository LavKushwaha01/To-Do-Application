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
      <input type="text" name="email" placeholder='enter your email here' value={formdata.email} onChange={changes} required/>
      <input type="text" name="password" placeholder='enter your email here' value={formdata.password} onChange={changes} required/>
      <button type='submit'  >Submit</button>
      </form>) : (
     <h3>{message}</h3>
   )}
       </div>
   
     );
   
   }
   
   export default Singup
   
   