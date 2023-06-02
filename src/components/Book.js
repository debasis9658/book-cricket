import React from 'react';

const Book = ({ currentPage, flipped, handleFlip }) => {
  
  return (
    <div className='Book-Container'>
        <div className={`book ${flipped ? 'flipped' : ''}`}>
        <div className="cover front">Front Cover</div>
        <div className="cover back">Back Cover</div>
        <div className="pages">
          <div className={`page front`}>{currentPage}</div>
          {/* <div className={`page back`}>{currentPage}</div> */}
        </div>
      </div>
      <button onClick={()=>{handleFlip()}}>Flip</button>
    </div>
  );
};

export default Book;
