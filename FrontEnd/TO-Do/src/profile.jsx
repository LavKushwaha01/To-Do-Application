import React, { useEffect, useState, useRef } from 'react';
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

  async function focusOnInput() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }


  return (
    <div>
      {/* {email!='' ?(
     <div> */}
      <div id='navigation'>
        <div id='logo section'>
         
        </div>
        <div id='inner-nev'>
           <div>
           <img
                src="https://www.nicepng.com/png/full/17-178841_home-png-home-icon-free.png"
                style={{
                    width: 34,
                    height: 34,
                    marginRight: "40px"
                }}
            />
           </div>
           <div>
           <img
                src="https://icon-library.com/images/tick-icon-png/tick-icon-png-2.jpg"
                style={{
                    width: 34,
                    height: 34,
                     marginRight: "40px"
                }}
            />
           </div>
           <div>
           <img
                src="https://img.freepik.com/free-icon/wall-clock_318-633461.jpg"
                style={{
                  width: 34,
                    height: 34,
                     marginRight: "40px"
                }}
            />
           </div>
           <div>
           <img
                src="https://cdn0.iconfinder.com/data/icons/business-dual-color-glyph-set-2/128/analytics-1024.png"
                style={{
                  width: 38,
                  height: 34,
                   marginRight: "40px"
                }}
            />
           </div>

        </div>
      </div>

      <div className='todoAdd top-wrapper'>
        <input type="text" name="addTodo" id="todoinput" ref={inputRef} placeholder='Write your To-Do' />
        <button id='inputbt' onClick={focusOnInput} style={{ width: '200px', padding: '10px 20px' }}>Add Todo</button>
      
        <div className='todoAdd'>
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
      </div> <br />
      <div id='preinput'>
           
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
