import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(){
    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Sign In Successful');
        console.log(data);
      } 
      else {
        alert(data.message || 'Sign In Failed');
      }
    }
     catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
      <h2>Sign In</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn
