import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editBook } from '../actions/books'
import { Field, reduxForm } from 'redux-form'

class BookEdit extends Component {

  editTheBook = (editedBook) => {
    editedBook.id = this.props.match.params.id
    this.props.editBook(editedBook)
  }

  componentWillRecieveProps() {

  }

  render () {
    const { handleSubmit } = this.props
    console.log('loaded', this.props)
    return (
      <form onSubmit={handleSubmit(this.editTheBook)}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="title"
            />
          </div>
        </div>
        <div>
          <label>Author</label>
          <div>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="author"
            />
          </div>
        </div>
        <div>
          <label>Pages</label>
          <div>
            <Field
              name="pages"
              component="input"
              type="text"
              placeholder="pages"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    // book: state.books.filter(book => book.id == props.match.params.id)[0],
    initialValues: state.books.filter(book => book.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editBook: bindActionCreators(editBook, dispatch),
  }
}

BookEdit = reduxForm({
  form: 'book_edit' // a unique identifier for this form
})(BookEdit)


export default connect(mapStateToProps, mapDispatchToProps)(BookEdit)
