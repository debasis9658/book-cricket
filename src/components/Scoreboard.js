import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllUsers from './AllUsers';

function Scoreboard({ onScoreChange, players, setPlayers, scores, setScores, isOut, setIsOut, username }) {
  const [users, setUsers] = useState([]);

  const handleAddPlayer = () => {
    if (players.length < 5) {
      setPlayers([...players, `Player ${players.length + 1}`]);
      setScores([...scores, 0]);
      setIsOut([...isOut, 0]);
    }
  };

  

  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((player, i) => i !== index);
    const updatedScores = scores.filter((score, i) => i !== index);
    const updatedIsOut = isOut.filter((isOu, i) => i !== index);
    setPlayers(updatedPlayers);
    setScores(updatedScores);
    setIsOut(updatedIsOut);
  }

  useEffect(()=> {
    fetchData();
    players[0] = username;
    console.log('username:', username);
  }, [players, username]);

  const fetchData = async () => {
    try{
      const response = await axios.get('http://localhost:8000/api/v1/users/get-users');
      const extractedUsers = response.data.data.extractedUsers;
      console.log('Users:', extractedUsers);
      setUsers(extractedUsers);
    }
    catch(err){
      console.log('Error:', err);
    }
  }

  useEffect(() => {
    // This effect will run whenever 'users' array changes
    console.log('Users have been updated:', users);
    console.log('Logged In user updated:', username);
    // You can perform additional logic or actions here
  }, [users, username]);
  

  return (
    <div className='scoreboard'>
      <h2>Scoreboard</h2>
      <div className="players">
        {players.map((player, index) => (
          <div key={index} className="player">

            <span className="player-name">{player}</span>

            {!isOut[index] ? <span className="player-score">{scores[index]}</span> : null}
            {isOut[index] ? <span className="player-score">OUT</span> : null}
            {isOut[index] ? <span className="score-out">Score:{scores[index]}</span> : null}

            {!isOut[index] ? <button onClick={() => onScoreChange(index)}>Flip</button> : null}
              
            <button onClick={() => handleDeletePlayer(index)}>Delete</button>
          </div>
        ))}
      </div>

      {players.length < 5 && (
        <button onClick={handleAddPlayer}>Add Player</button>
      )}
      <AllUsers users={users} />
    </div>
  );
}

export default Scoreboard;
