import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';
import './App.css'
import Singup from './singUp';
import SignIn from './SingIn';


function App(){
  return ( 
  <div>
          <BrowserRouter>
             <Routes>
                <Route path="/" element={<Layout />}>
                     <Route path="/singup" element={<Singup />} />
                     <Route path="/singin" element={<SignIn/>}/>
                     <Route path="*" element={<ErrorPage />} />
                 </Route>
             </Routes>
          </BrowserRouter>
  </div> 
  )
}

function Layout() {
    return (
        <div >
                <div>Welcome to the To-Do Application</div> <br />
                <Link to="/singup">Singup</Link> <br />
                <Link to="/singin">Singin</Link>
            <div >
                <Outlet />
            </div>
        </div>
    );
}

function ErrorPage() {
  return (
      <div>
          <h1>404 Page not found</h1>
      </div>
  );
}


export default App 

