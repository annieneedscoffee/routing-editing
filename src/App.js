import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllBooks } from './actions/books'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BookList from './components/BookList'
import BookInput from './components/BookInput'
import BookEdit from './components/BookEdit'

class App extends Component {
  componentDidMount() {
    this.props.getAllBooks()
  }
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Book</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={BookList}/>
          <Route path="/add" component={BookInput}/>
          <Route path="/edit/:id" component={BookEdit}/>
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBooks: bindActionCreators(getAllBooks, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(App)
