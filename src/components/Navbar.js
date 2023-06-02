import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/login" style={linkStyle}>Login</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/signup" style={linkStyle}>Signup</Link>
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
