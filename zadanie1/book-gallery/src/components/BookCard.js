import React from 'react'

const BookCard = ({book}) => (
    <div className="book-card">
        <img src={book.image} alt='book.title'></img>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
    </div>
);
export default BookCard