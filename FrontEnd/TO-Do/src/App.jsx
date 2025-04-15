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
                     <Route path="/" element={<Landing />} />
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


function Landing() {
  return (
      <div>
          <h1>Welcome to the To-Do Application</h1>
      </div>
  );
}

// function singup() {
//  const [formdata, setformdata] = useState({
//   email:'',
//   password:''
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [message, setMessage] = useState("");

//  const changes = function (props){
//   setformdata({
//     ...formdata,
//     [props.target.name]: props.target.value,
   
//   });
//  };
//  async function submit(){
//   try {
//     const response = await axios.post(' http://localhost:3000/singup', formdata); 
//       setMessage("Congaratulations you are now singup");
//       setSubmitted(true);
//       console.log(formdata)
//   }
 
//    catch (error) {
//     console.error('Error saving user data:', error);
//     throw error;
//   }
//  };

//   return (
//     <div>
//       {!submitted ? (
//    <form onSubmit={(e) => { e.preventDefault(); submit(); } }>
//    <input type="text" name="email" placeholder='enter your email here' value={formdata.email} onChange={changes}/>
//    <input type="text" name="password" placeholder='enter your email here' value={formdata.password} onChange={changes}/>
//    <button type='submit'  >Submit</button>
//    </form>) : (
//   <h3>{message}</h3>
// )}
//     </div>

//   );

// }

export default App 

