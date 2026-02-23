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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is Carson's React Application</h1>
      <div className="card">
        <Shelf />
        
      </div>
    </>
  )
}

export default App
