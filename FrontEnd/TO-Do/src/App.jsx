import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';
import './App.css'
import './index.css'
import Singup from './singUp';
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
        </div> <br /><br /><br /><br /><br /><br />
        <footer style={{color: "white", fontFamily:"cursive", fontSize: "20px", background:"black"}}>Made with 💖 by lav</footer>
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

