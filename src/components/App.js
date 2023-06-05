import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './Book';
import Scoreboard from './Scoreboard';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

function App() {
  //Book Component state
  let [currentPage, setCurrentPage] = useState(1);
  const [flipped, setFlipped] = useState(false);
  
  //Scoreboard component state
  let [players, setPlayers] = useState(['Player 1']);
  let [scores, setScores] = useState([0]);
  let [isOut, setIsOut] = useState([0]);

  //User and its details
  let [username, setUsername] = useState(null);

  const handleFlip = () => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    setFlipped(true);
    const tempPage = "";
    setCurrentPage(tempPage);
    // Reset flipped state after the flipping animation
    currentPage = randomPage;
    setTimeout(() => {
      setFlipped(false);
      setCurrentPage(randomPage);
     console.log('Inside handleFlip() currPage:',currentPage);
     console.log('Inside handleFlip() randomPage:',randomPage);
    }, 1000);
    
  };
  
  
  const handleScoreChange = (index) => {
    //First handle the case where you have to press the flip button in the book component
    handleFlip();
    //change the score to the score + currentPage
    const updatedScores = [...scores];
    const updatedIsOut = [...isOut];
    console.log('Current-page:', currentPage);
    if(currentPage % 10 === 0){
      updatedIsOut[index] = 1;
      updatedScores[index] = 0;
    }

    isOut[index] = updatedIsOut[index];

    if(isOut[index] === 0){
      scores[index] += (currentPage % 10);
      updatedScores[index] += (currentPage % 10);
      setScores(updatedScores);
    }
    
    setIsOut(updatedIsOut);


    console.log('currentpage:', currentPage,' ', 'index:', index);
    console.log('scores:', scores[0], ' ', scores[1]);
    console.log('isout:', isOut[0], ' ', isOut[1]);
  };

  useEffect(() => {
    console.log('Rerender');
  }, [scores, username]);

  return (
  <div className="App" style={appStyle}>

    <Router>
      <div>
        <Navbar username={username} setUsername={setUsername} />
        <Routes>
          <Route path="/" element={
            <div className='content' style={contentStyle}>
            <Book currentPage={currentPage} flipped={flipped} handleFlip={handleFlip} />
            <Scoreboard onScoreChange={handleScoreChange} players={players} setPlayers={setPlayers} scores={scores} setScores={setScores} isOut={isOut} setIsOut={setIsOut} username={username} style={{ marginLeft: '20px' }} />
          </div>
          }/>

          {
            !username && <Route path="/login" element={<Login username={username} setUsername={setUsername} players={players} scores={scores} />} /> 
          }
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    
    
    
  </div>
  );
  
}

export default App;

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const contentStyle = {
  marginLeft: '150px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
};
