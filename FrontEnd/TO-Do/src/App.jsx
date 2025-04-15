import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';
import './App.css'
import Singup from './singUp';
import SignIn from './SingIn';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Landing />} />
                    <Route path="/singup" element={<Singup />} />
                    <Route path="/singin" element={<SignIn />} />
                    <Route path="*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}


function Landing() {
    return <div>
        <h1 style={{ color: "black" }}>Your To-Do Application..</h1>
        <div id='layout' style={{ background: "#5ebec4", padding: "100px"}} >
            <nav>
                <h3 style={{ fontFamily: "cursive" }}>
                    🌟 "Welcome back! Let’s make today productive." <br />
                    📝 "Your day, your tasks, your rhythm."  <br />
                    🎯 "Stay focused, stay organized, stay awesome." <br /> 
                </h3>

                <h1 style={{ fontFamily: "monospace", color: "#6e6e6e" }} > Let's Start Your Day with smile 😊 </h1>

                <div class="container" >
                    <div>
                        <h5>New user?</h5>
                        <Link to="/singup" className="nav-link">Singup</Link>
                    </div>
                    <div>
                        <h5>Already SignUp</h5>
                        <Link to="/singin" className="nav-link">Singin</Link> <br />
                    </div>
                </div>
            </nav>
        </div>
        <footer style={{color: "black", fontFamily:"cursive", fontSize: "20px" }}>Made with 💖 by lav</footer>
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

