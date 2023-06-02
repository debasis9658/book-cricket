import React from 'react';

function Scoreboard({ onScoreChange, players, setPlayers, scores, setScores, isOut, setIsOut }) {

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
    </div>
  );
}

export default Scoreboard;
