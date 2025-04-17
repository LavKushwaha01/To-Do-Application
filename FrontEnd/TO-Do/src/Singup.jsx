import React, { useState } from 'react';
import axios from 'axios';
import SignIn from './SingIn';
import { Link } from 'react-router-dom';
import './App.css'


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
         setMessage(response.data.message);
         setSubmitted(true);
         
     }
    
      catch (error) {
       console.error('Error saving user data:', error);
       throw error;
     }
    };
   
     return (
      <div>
        <div id='formbox'>
         {!submitted  ? (
      <form onSubmit={(e) => { e.preventDefault(); submit(); } }>
        <h2 style={{color: "black", paddingTop: "40px"}}>Sign Up</h2>
      <input type="email" name="email" placeholder='enter your email' value={formdata.email} onChange={changes} required/> <br />
      <input type="password" name="password" placeholder='enter your password' value={formdata.password} onChange={changes} required/> <br />
      <button type='submit' style={{margin:"10px"}} >Sign Up</button>
      
      </form> ) : (
        <div>
<form onSubmit={(e) => { e.preventDefault(); submit(); } }>
<h2 style={{color: "black", paddingTop: "40px"}}>Sign Up</h2>
<input type="email" name="email" placeholder='enter your email' value={formdata.email} onChange={changes} required/> <br />
<input type="password" name="password" placeholder='enter your password' value={formdata.password} onChange={changes} required/> <br />
<button type='submit' style={{margin:"10px"}} >Sign Up</button>

</form>
          <div id='message'><h3 >{message}</h3>
        <Link id='link' to={"/singin" } >Click here to 'Sign In'</Link>
        </div>

        </div>
   )}
       
     </div>  <br /><br /><br /><br /><br /><br />
     <footer style={{color: "white", fontFamily:"cursive", fontSize: "20px", background:"black"}}>Made with 💖 by lav</footer>
     </div>
     );
   
   }
   
   export default Singup
   
   