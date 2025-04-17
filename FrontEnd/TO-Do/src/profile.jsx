import React, { useEffect, useState ,useRef } from 'react';
import axios from 'axios';
import './profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);

  const [searchDate, setSearchDate] = useState('');
  
   const handleChange = (e) => {
      setSearchDate(e.target.value);
    };

    const handleSearch = () => {
     
    }


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/profile', {
          headers: { Authorization: token }
        });
        setEmail(res.data.email);
      } catch (err) {
        console.error('Unauthorized');
      }
    };

    fetchProfile();
  }, []);

   async function focusOnInput(){
   inputRef.current.focus();
   console.log(inputRef.current.value);
   }


  return (
    <div>
      {/* {email!='' ?(
     <div> */}
     <div id='navigation'>
      <h2>home</h2>
      <h2>completed</h2>
      <h2>incomplete</h2>
      <h2>profile</h2>
     </div>
     <div className ='todoAdd top-wrapper'>
      <input type="text" name="addTodo" id="todoinput"  ref={inputRef} placeholder='Write your To-Do'/> 
      <button onClick={focusOnInput} style={{width: '200px', padding: '10px 20px'}}>Add Todo</button>
      <search>here</search>
      
      <div className ='todoAdd'>
      <input
        type="date"
        value={searchDate}
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      > Search</button>
      </div>
    </div>
     {/* </div>
      ) :(
        <div>
            <h1>404 internal server error</h1>
        </div>
      )

      } */}
    </div>


  );
}

export default Profile;
