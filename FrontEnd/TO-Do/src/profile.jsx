import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);

  const [searchDate, setSearchDate] = useState('');


  const frequentTasks = [
    'Go to class',
    'LeetCode daily problem',
    'Exercise',
    'Read a Book',
    'Meditate',
    'go to gym',
    'walk 6000 steps'
  ];

  const [myTasks, setMyTasks] = useState([]);

  const addTask = (task) => {
    if (!myTasks.includes(task)) {
      setMyTasks([...myTasks, task]);
    }
  };

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
    addTask(inputRef.current.value);
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
        <input type="text" name="addTodo" id="todoinput" ref={inputRef}
          placeholder='Write your To-Do' />


        <button id='inputbt' onClick={focusOnInput} style={{ width: '150px', }}>Add Todo</button>

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
      </div>
      <div style={{ display: 'flex', width: '100%' }}>

        <div id='preinput'>
          <h2 style={{ fontFamily: "cursive", color: "black" }}>Most frequent Used</h2>
          <hr></hr>
          <ul >
            {frequentTasks.map((task, index) => (
              <li key={index} className="task-item" >
                <span>{task}</span>
                <button onClick={() => addTask(task)} id='btn'>➕</button>
              </li>
            ))}
          </ul>

        </div>
        <div id='main-content'>
          <h2 className="todo-list-heading">📝 My Todo List</h2>
          <ul className="task-list">
            {myTasks.map((task, index) => (
              <li key={index} className="my-task-item">
                {task}
                <input type="checkbox" id='cheakbox' />
              </li>
            ))}
          </ul>
        </div>


      </div>
      <div id='footer' style={{ display: 'flex',height:"85px" , marginTop:"16px"}}>
        
      <footer >
      <h5 style={{margin:"0px" , padding:"0px" , marginLeft:"450px"}}>connect with Me..</h5>
      <div id='icon-container'>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className='iconImage'
            style={{marginLeft:"550px"}}
          />
        </a>

        {/* Discord */}
        <a href="https://discord.com/users/your-id" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg"
            alt="Discord"
            className='iconImage'
          />
        </a>

        {/* GitHub */}
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className='iconImage'
          />
        </a>

        {/* Telegram */}
        <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            className='iconImage'
          />
        </a>
           {/* Instagram */}
           <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className='iconImage'
          />
        </a>

        {/* Facebook */}
        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
            alt="Facebook"
            className='iconImage'
          />
        </a>
      </div>
    </footer>
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
