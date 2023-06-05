import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ username, setUsername }) => {

  const handleLogout = async () => {
    try{
      const response = await axios.get('http://localhost:8000/api/v1/users/logout');
      localStorage.removeItem('token');
      username = 'player1';
      setUsername(username); 
      console.log('Local Storage:', localStorage);
      console.log(response.data.message);
    }
    catch(err){
      console.log('Error:', err);
    }
  }
  useEffect(() => {
    console.log('My prop has changed', username);
  }, [username]);
  
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navItemStyle}>
          {!username && <Link to="/login" style={linkStyle}>Login</Link>}
          
        </li>
        <li style={navItemStyle}>
          {!username && <Link to="/signup" style={linkStyle}>Signup</Link>}
          
        </li>

        <li style={navItemStyle}>
          {username && 
            <Link to="/" style={linkStyle} onClick={handleLogout}>
              Logout
            </Link>
          }
        </li>

        <li style={{ ...navItemStyle, marginLeft: 'auto' }}>
          {username && <span style={usernameStyle}>Welcome, {username}</span>}
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

// Styles
const navStyle = {
  backgroundColor: '#f8f8f8',
  padding: '10px',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: '0',
};

const navItemStyle = {
  marginRight: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
};
const usernameStyle = {
  color: 'f8f8f8',
  fontWeight: 'bold',
  fontSize: '16px',
  marginRight: '10px',
  textTransform: 'uppercase',
  // Add more styles as needed
};
