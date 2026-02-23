import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const books = [
  { id: 1, title: 'Americanah', author: 'Chimamanda Ngozi Adichie', isRead: true },
  { id: 2, title: 'Elena Knows', author: 'Claudia Piñeiro', isRead: true },
  { id: 3, title: 'Permafrost', author: 'Eva Baltasar', isRead: false },
  { id: 4, title: 'Circe', author: 'Madeline Miller', isRead: false }
]

function PageHeader () {
  return(
    <div>
      <h1>Carson's Bookshelf</h1>
      <h3>Info about the books on my shelf!</h3>
      <p>Color code: green for read books, yellow for unread books</p>
    </div>
  )
}

function Shelf () {
  const listBooks = books.map(book => 
    <li
      key={book.id}
      style={{
        color: book.isRead ? 'green' : 'yellow'
      }}
    >
      {book.title} by {book.author}
    </li>
  );
  return (<ul>{listBooks}</ul>) 
}

function BookCount () {
  const total = books.length
  const readBooks = books.filter(book => book.isRead).length;
  return (
    <div>
      <p> Carson has read {readBooks} out of the {total} books on his shelf!</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is Carson's React Application</h1>
      <div className="card">
        <PageHeader />
        <Shelf />
        <BookCount />
      </div>
    </>
  )
}

export default App
