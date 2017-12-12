import axios from 'axios'

export const GET_ALL_BOOKS_PENDING = 'GET_ALL_BOOKS_PENDING'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'
export const EDIT_BOOK_PENDING = 'EDIT_BOOK_PENDING'
export const EDIT_BOOK_SUCCESS = 'EDIT_BOOK_SUCCESS'

export const getAllBooks = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_BOOKS_PENDING})
    let books = await axios.get(`http://localhost:8000/books`)
    dispatch({
      type: GET_ALL_BOOKS_SUCCESS,
      payload: books
    })
  };
};

export const editBook = (editedBook) => {
  console.log('book in action', editedBook)
  return async (dispatch) => {
    dispatch({type: EDIT_BOOK_PENDING})
    let book = await axios.patch(`http://localhost:8000/books/${editedBook.id}`, editedBook)
    console.log('response', book)
    dispatch({
      type: EDIT_BOOK_SUCCESS,
      payload: book
    })
  };
};
