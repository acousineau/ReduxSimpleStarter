// state argument is NOT application state
// it is only the state this reducer is responsible for
export default (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.book
  }
  return state
}