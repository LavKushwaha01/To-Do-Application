import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(){
    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.user) {
        alert('Sign In Successful');
        console.log(data);
      } 
      else {
        alert('Sign In Failed');
        setSubmitted(true);
        setMessage(data.message)
      }
    }
     catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div id='formbox'>
       {!submitted  ? (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
      <h2 style={{color: "black" , paddingTop: "40px"}}>Sign In</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
      <button type="submit"  style={{margin:"10px"}}>Sign In</button>
    </form> ) : (
      <div id='message'><h3 >{message}</h3>
    <Link to={"/singup"} >Click here to 'Sign up'</Link>
    </div>
   
  )}
   </div>
  );
}

export default SignIn
