import React from 'react'
import { Link } from 'react-router'

function LibraryHeader() {
  const libraryHeader = "Welcome to AUCA Library"
  return (
    <div>
      <header>
        <h1>{libraryHeader}</h1>
        <p>This is a library system that will help you to manage the books</p>
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
          <Link to="/" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/books" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>Books</Link>
          <Link to="/office" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>Office</Link>
          <Link to="/" style={{ color: '#ff4d4f', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link>
        </nav>
      </header>
    </div>
  )
}

export default LibraryHeader