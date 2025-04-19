import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);

  const [searchDate, setSearchDate] = useState('');

  const [todayTasks, setTodayTasks] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [myTasks, setMyTasks] = useState([]);

  const todayDate = new Date().toLocaleString('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split(',')[0];

  const [queryDate, setQueryDate] = useState(todayDate);


  const todayTotal = todayTasks.length;
  const todayComplete = todayTasks.filter(task => task.completed).length;
  const todaypending = todayTotal - todayComplete;
  const Efficiency = todayTotal === 0 ? 0 : todayComplete / todayTotal;
  const fixedEfficiency = parseFloat(Efficiency.toFixed(2));


  const toTitleCase = (str) =>
    str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const frequentTasks = [
    'Go to class',
    'LeetCode daily problem',
    'Exercise',
    'Read a Book',
    'Meditate',
    'go to gym',
    'walk 6000 steps'
  ];

  const deleteTodo = async (taskid) => {
    try {
      const response = await axios.delete(`http://localhost:3000/profile/delete/${taskid}`);
      console.log("Deleted successfully:", response.data);
      fetchTodos();
      fetchTodayTodos();
      // Update your UI or state here
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


  const handleCheckboxToggle = async (taskId, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/profile/updatetodo/${taskId}`, {
        completed: newStatus
      });
      fetchTodos();
      fetchTodayTodos(); // Refresh list
    } catch (error) {
      console.error("Error updating todo status", error);
    }
  };

  const addTask = (taskText) => {
    const titleCaseTask = toTitleCase(taskText);
    if (!myTasks.some(task => task.todo === titleCaseTask)) {
      setMyTasks(prev => [...prev, { todo: titleCaseTask, date: today }]);
      handleAddTodo(titleCaseTask);
    };
  }

  const handleChange = (e) => {
    setSearchDate(e.target.value);
  };

  const handleSearch = () => {
    setQueryDate(searchDate);
    fetchTodos();

  }

  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3000/profile/todo?date=${queryDate}`, {
        headers: { Authorization: token }
      });
      setMyTasks(response.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const fetchTodayTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3000/profile/todo?date=${todayDate}`, {
        headers: { Authorization: token }
      });
      setTodayTasks(response.data);
    } catch (error) {
      console.error("Error fetching today's todos", error);
    }
  };


  useEffect(() => {
    fetchTodos();
    fetchTodayTodos();
  }, []);

  const handleAddTodo = async (taskText) => {
    const trimmed = taskText.trim();
    if (!trimmed) return;

    const titleCaseTask = toTitleCase(trimmed);

    const newTodo = {
      todo: titleCaseTask,
      date: todayDate,
    };
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/profile/Addtodo', newTodo, {
        headers: { Authorization: token }
      });
      inputRef.current.value = ''
      fetchTodos();
      fetchTodayTodos();  // Refresh the to-dos after adding
    } catch (error) {
      console.error("Error adding todo", error);
    }
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
    const inputVal = inputRef.current.value.trim();
    if (!inputVal) return;
    addTask(inputVal);
    inputRef.current.value = '';
  }


  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
              <li key={task._id || index} className="my-task-item">
                {task.todo}
                <input type="checkbox" id='cheakbox' checked={task.completed} onChange={() => handleCheckboxToggle(task._id, !task.completed)} />
                <button className='change delete' onClick={() => deleteTodo(task._id)}>Delete</button>

              </li>
            ))}
          </ul>
        </div>
        <div id='overall'>

          <div id='todaytask' >
            <h3 style={{ margin: '15px', paddingTop: '15px' }} id='today'>Today's Stats</h3>
            {Efficiency === 1 ? (
              <p style={{ fontSize: "18px", color: '#28a745' }}>"🎉 All tasks completed! You're on fire today!"</p>

            ) : (
              <div>
                <p style={{ color: '#E57373', fontWeight: 'bolder', marginBottom: '3px' }}>🚀 Stay focused! {todaypending} tasks still need your magic.</p>
              </div>
            )
            }
            <p style={{ fontSize: "18px" }}>📝 Total Tasks: <strong>{todayTotal}</strong></p>
            <p style={{ fontSize: "18px" }}>✅ Completed Tasks: <strong>{todayComplete}</strong></p>
            <p style={{ fontSize: "18px" }}>⏳ Pending Tasks: <strong>{todaypending}</strong></p>
            <p style={{ fontSize: "18px" }}>📈 Efficiency: <strong>{fixedEfficiency}</strong></p>


          </div>

          <div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                marginTop: "80px",
                marginRight: "20px",
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: darkMode ? "#222" : "#eee",
                color: darkMode ? "#fff" : "#000"
              }}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

      </div>
      <div id='footer' style={{ display: 'flex', height: "85px", marginTop: "16px" }}>

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
            {/* Instagram */}
            <a href="https://www.instagram.com/lav.ig_/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className='iconImage'
              />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/lavkumar.lavkumar.355" target="_blank" rel="noopener noreferrer">
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
