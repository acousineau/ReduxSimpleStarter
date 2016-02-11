export function selectBook(book) {

  // console.log(`Action triggered: ${book.title}`);

  // selectBook is an Action Creator - needs to return an Action
  // Object with a 'type' property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};