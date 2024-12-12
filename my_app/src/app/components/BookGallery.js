import React from 'react'
import BookCard from './BookCard'

const books = [
    {title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', image: 'public/holmes.jpg'},
    {title: 'Ostatnie Życzenie', author: 'Andrzej Sapkowski', image: 'public/wiedzmin.jpg'},
    {title: 'Steve Jobs', author: 'Walter Isaacson', image: 'public/jobs.jpg'},
    {title: 'Lalka', author: 'Bolesław Prus', image: 'public/lalka.jpg'},
]

const BookGallery = () => (
    <div>
        {books.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </div>
)
export default BookGallery;