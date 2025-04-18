import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  async function submit() {
    try {
      const response = await axios.post('http://localhost:3000/signin', { email, password });

      const data = response.data;
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);

      if (response.data.user) {
        console.log(data);
        navigate('/profile');
      }
      else {
        setSubmitted(true);
        setMessage(data.message)
      }
    }
    catch (err) {
      alert('Error here: ' + err.message);
    }
  };

  return (
    <div>
    <div id='formbox'>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
          <h2 style={{ color: "black", paddingTop: "40px" }}>Sign In</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
          <button type="submit" style={{ margin: "10px" }}>Sign In</button>
        </form>) : (
        message != 'Invalid email or password' ? (
          <div>
            <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
              <h2 style={{ color: "black", paddingTop: "40px" }}>Sign In</h2>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
              <button type="submit" style={{ margin: "10px" }}>Sign In</button>
            </form>
            <div id='message'><h3 >{message}</h3>
              <Link id='link' to={"/singup"} >Click here to 'Sign Up'</Link>
            </div>
          </div>) : (
          message == 'Sign in successful' ? (
            <div>

            </div>
          ) : (
            <div>
              <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
                <h2 style={{ color: "black", paddingTop: "40px" }}>Sign In</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
                <button type="submit" style={{ margin: "10px" }}>Sign In</button>
                <h4 style={{ color: "red" }}>Inncorect password </h4>
              </form>
            </div>
          )
        )
      )

      }
 
    </div>   <br /><br /><br /><br /><br /><br />
     <footer style={{color: "white", fontFamily:"cursive", fontSize: "20px", background:"black"}}>Made with 💖 by lav</footer>
     </div>
  );
}

export default SignIn
