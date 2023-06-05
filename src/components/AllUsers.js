import React from 'react';

const AllUsers = ({ users }) => {
  const containerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
  };

  const userStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontWeight: 'bold',
  };

  const emailStyle = {
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h2>All Users</h2>
      {users.map((user, index) => (
        <div style={userStyle} key={index}>
          <p style={nameStyle}>Name: {user.name}</p>
          <p style={emailStyle}>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
