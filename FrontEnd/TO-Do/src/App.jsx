
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import axios from 'axios';
axios.defaults.baseURL = 'https://to-do-application-uyb6.onrender.com/api';
axios.defaults.withCredentials = true;

import './App.css'
import './index.css'
import Singup from './Singup';
import SignIn from './SingIn';
import Profile from './profile';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Landing />} />
                    <Route path="/singup" element={<Singup />} />
                    <Route path="/singin" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}



function Landing() {
    return <div>

        <div id='layout' >

            <nav>
                <h1 style={{ fontFamily: "cursive" }}>
                    Welcome to 𝕥𝕒𝕤𝕜𝕝𝕪..
                </h1>
                <h1></h1>
                <div class="container" >
                    <div>
                        <h5>New User?</h5>
                        <Link to="/singup" className="nav-link">Sign Up</Link>
                    </div>
                    <div>
                        <h5>Already Sign Up</h5>
                        <Link to="/singin" className="nav-link">Sign In</Link>
                    </div>
                </div>
            </nav>
        </div> <br /><br /><br /><br /><br />
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
}

function ErrorPage() {
    return (
        <div>
            <h1>404 Page not found</h1>
        </div>
    );
}



export default App

