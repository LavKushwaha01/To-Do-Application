import React, { useState } from 'react';

import axios from 'axios';


import SignIn from './SingIn';
import { Link } from 'react-router-dom';
import './App.css'


function Singup() {
  const [formdata, setformdata] = useState({
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const changes = function (props) {
    setformdata({
      ...formdata,
      [props.target.name]: props.target.value,

    });
  };
  async function submit() {
    try {
      const response = await axios.post('https://to-do-application-uyb6.onrender.com/api/signup', formdata);
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
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <h2 style={{ color: "black", paddingTop: "20px" }}>Sign Up</h2>
            <input type="email" name="email" placeholder='enter your email' value={formdata.email} onChange={changes} required /> <br />
            <input type="password" name="password" placeholder='enter your password' value={formdata.password} onChange={changes} required /> <br />
            <button type='submit' style={{ margin: "10px" }} >Sign Up</button>

          </form>) : (
          <div>
            <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
              <h2 style={{ color: "black", paddingTop: "20px" }}>Sign Up</h2>
              <input type="email" name="email" placeholder='enter your email' value={formdata.email} onChange={changes} required /> <br />
              <input type="password" name="password" placeholder='enter your password' value={formdata.password} onChange={changes} required /> <br />
              <button type='submit' style={{ margin: "10px" }} >Sign Up</button>

            </form>
            <div id='message'><h3 >{message}</h3>
              <Link id='link' to={"/singin"} >Click here to 'Sign In'</Link>
            </div>

          </div>
        )}

      </div>  <br /><br /><br /><br /><br />
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

            {/* Twitter */}
            <a href="https://x.com/lavkushwaha2?t=y5uMnCjTPf_amwzHQLbrAg&s=08" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                  alt="X"
                  className="iconImage"
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

export default Singup

