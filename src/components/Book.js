import React from 'react'

const Book = (props) => {
  let {id, title, author, pages} = props.book
  return (
    <li>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
    </li>
  )
}

export default Book
