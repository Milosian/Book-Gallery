import React from 'react'
import BookCard from './BookCard'

const books = [
    {title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', image: 'holmes.jpg'},
    {title: 'Ostatnie Życzenie', author: 'Andrzej Sapkowski', image: 'wiedzmin.jpg'},
    {title: 'Steve Jobs', author: 'Walter Isaacson', image: 'jobs.jpg'},
    {title: 'Lalka', author: 'Bolesław Prus', image: 'lalka.jpg'},
]

const BookGallery = () => {
    const bookCount = books.length
    return (
        <div className='booksColumns'>
            {books.map((book, index) => (
                <BookCard key={index} book={book}/>
            ))}
        </div>
    )
}
export default BookGallery;