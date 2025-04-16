import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [email, setEmail] = useState('');

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

  return (
    <div>
      <h2>Welcome to your profile</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;
