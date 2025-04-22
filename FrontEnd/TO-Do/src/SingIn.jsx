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
      const response = await axios.post('https://to-do-application-uyb6.onrender.com/api/signin', { email, password });

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
            <h2 style={{ color: "black", paddingTop: "20px" }}>Sign In</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
            <button type="submit" style={{ margin: "10px" }}>Sign In</button>
          </form>) : (
          message != 'Invalid email or password' ? (
            <div>
              <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
                <h2 style={{ color: "black", paddingTop: "20px" }}>Sign In</h2>
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
                  <h2 style={{ color: "black", paddingTop: "20px" }}>Sign In</h2>
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

      </div>   <br /><br /><br /><br /><br />
      <div id='footer' style={{ display: 'flex', height: "85px" }}>

        <footer >
          <h5 style={{ margin: "0px", padding: "0px", marginLeft: "450px" }}>connect with Me..</h5>
          <div id='icon-container'>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/lav-kushwaha-b9057b292/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className='iconImage'
                style={{ marginLeft: "550px" }}
              />
            </a>

            {/* Discord */}
            <a href="https://discord.com/users/lavkushwaha01" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg"
                alt="Discord"
                className='iconImage'
              />
            </a>

            {/* GitHub */}
            <a href="https://github.com/LavKushwaha01" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className='iconImage'
              />
            </a>

            {/* Telegram */}
            <a href="https://t.me/lavkushwaha01" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                className='iconImage'
              />
            </a>


            {/* Email */}
            <a href="mailto:lavkumar062@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="iconImage"

              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SignIn
