import React from 'react';

const Book = ({ title, coverImage }) => {
  return (
    <div className="book">
      <img src={coverImage} alt={title} className="book-cover" />
      <h3 className="book-title">{title}</h3>
      {/* Additional book details can be added here */}
    </div>
  );
};

export default Book;
