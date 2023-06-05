import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ username, setUsername, players, scores }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    try {
      // Perform login logic here
      console.log('Logging in...');

      // Make API call to fetch user data
      const response = await axios.post('http://localhost:8000/api/v1/users/signin', {
        email,
        password
      });
      
      // Handle the successful login response
      const { name } = response.data.data;
      const token = response.data.data.token;
      console.log('name is going to be :', name);
      console.log('Token is :', token);
      localStorage.setItem('token', token);
      // console.log('Local Storage:', localStorage);

      // Set the username in the parent component
      setUsername(name);
      players[0] = name;
      scores[0] = 0;

    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    // Code to run after the component mounts or when the 'username' prop changes
    console.log('Username updated:', username);
  }, [username]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  width: '200px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};
