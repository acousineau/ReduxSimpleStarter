import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// Takes return value from action and ensures it flows through all the reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)} 
          key={book.title} 
          className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props 
// on the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called - the result should be passed
  // to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Produces a container
// 'connect(callback)'' returns a function to call
// call the returned function with the component as a param

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method 'selectBook' - make it available as
// a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
