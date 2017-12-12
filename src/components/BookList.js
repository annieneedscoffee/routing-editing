import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from './Book'

class BookList extends Component {
  render () {
    let listOfBooks = this.props.books
      .map(book => {
        return (
          <div>
            <Book key={book.id} book={book}/>
            <button onClick={() => this.props.history.push(`/edit/${book.id}`)}>Edit this book</button>
          </div>
        )
      })
    return (
      <div>{listOfBooks}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, null)(BookList)
