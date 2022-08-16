import React from 'react'
import Book from './Book'

export default function RenderingList() {
    
  
  const books = [
    {
      title: "to kill a bird",
      author: "harper lee",
      pages: 232
    },
    {
      title: "Gret gatsby",
      author: "f scott",
      pages: 280
    },
    {
      title: "the catcher in the rye",
      author: "salinger",
      pages: 300
    },

  ]
  
  const bookList=[
        'to kill a bird',
        'great gatsby',
        'the cather in the rye'

    ]
 
 return (
    <div> 

    {bookList.map(book =>{

      return <h2 key={book}> {book}</h2>
    })}
    <hr/> 
    {
      books.map(book=>{
        return (
          
        <div key={book.title}>
          
         <h5> {book.title}</h5>
         <p> {book.author}</p>
         <p>{book.pages}</p>

        </div>)
      })
    }
    <hr/>
    {
      books.map(book =>{
        return <Book key={book.title} book={book.pages}/>
      })
    }
    </div>
  )
}
